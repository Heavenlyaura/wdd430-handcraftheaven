export default function LoginForm() {
  return (
    <div className=" bg-white rounded-3xl">
      <h1>Login</h1>
      <form action="/login" method="POST" className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
