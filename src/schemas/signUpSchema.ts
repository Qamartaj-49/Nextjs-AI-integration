import {z} from 'zod';


export const usernamevalidation = z
  .string()
  .min(3, { message: 'Username must be at least 3 characters long' })
  .max(20, { message: 'Username must be not more than 20 characters long' })
  .regex(/^[a-zA-Z0-9_]*$/, { message: 'Username must contain only letters, numbers, and underscores and no special characters allowed' });

export const signUpSchema = z.object({
  username : usernamevalidation,              
  email:z.string().email({message:'Invalid email address'}),
  password:z.string().min(6,{message:'Password must be at least 6 characters long'}), 


});