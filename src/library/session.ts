import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { UserFromSession, UserSession, SessionPayload } from "./definitions";

const secretKey = process.env.SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(user: UserFromSession) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ user, expiresAt });

  (await cookies()).set("session", session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
  });
}

export async function encrypt(payload: SessionPayload) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey);
}

export async function decrypt(
  session: string | undefined = ""
): Promise<UserSession | undefined> {
  try {
    const { payload } = await jwtVerify(session, encodedKey, {
      algorithms: ["HS256"],
    });
    return payload as unknown as UserSession;
  } catch (error) {
    console.error("Failed to verify session");
    return undefined;
  }
}

export async function getUserFromSession(): Promise<UserSession> {
  const sessionRaw = (await cookies()).get("session")?.value;
  const session = await decrypt(sessionRaw);
  return session as unknown as UserSession;
}

export async function deleteSession() {
  (await cookies()).delete("session");
}
