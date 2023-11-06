import { object, string } from 'yup';

export const loginSchema = object().shape({
  password: string().required().label('Password'),
  email: string().email().required().label('email'),
});
