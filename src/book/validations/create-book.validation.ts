import { object, string, number } from 'yup';

export const createBookSchema = object().shape({
  title: string().required().label('Title'),
  description: string().required().label('Description'),
  author: string().required().label('Author'),
  price: number().required().label('Price'),
  category: string()
    .oneOf(['adventure', 'fantasy', 'romance'])
    .required()
    .label('Category'),
});
