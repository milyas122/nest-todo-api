import { object, string, number } from 'yup';

export const signUpSchema = object().shape({
  name: string().required().label('Name'),
  password: string().required().label('Password'),
  email: string().email().required().label('email'),
});
