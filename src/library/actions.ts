"use server"
import { createUser } from "./data";
import { SignUpFormSchema } from "./definitions"
import bcrypt from 'bcrypt';



export async function login(prevState: any, formData: FormData) {

    const validationResults = SignUpFormSchema.safeParse({
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        role: formData.get('role'),
        email: formData.get('email'),
        password: formData.get('password')
    }) 
    
    if(!validationResults.success) {
        return {
            errors: validationResults.error.flatten().fieldErrors,
        }
    }

    const hashedPassword = await bcrypt.hash(validationResults.data.password, 10);
    
    const registerUser = await createUser(validationResults.data, hashedPassword)
}

// {state?.errors.lastname && <p>{state.errors.lastname}</p>}