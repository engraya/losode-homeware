import { StaticImageData } from 'next/image';
import { cups, cotton, wood, pots } from '../components/assets';
export interface Product {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

export const products: Product[] = [
  {
    name: 'Exercise Equipment',
    description: 'Create Exercises for any subject with the topics you and your students care about.',
    price: '₦74,030',
    image: cups,
  },
  {
    name: 'Yoga Mat',
    description: 'Comfortable and durable yoga mat for all your workout needs.',
    price: '₦5,000',
    image: wood,
  },
  {
    name: 'Running Shoes',
    description: 'High-performance running shoes for all levels of runners.',
    price: '₦25,000',
    image: cotton,
  },
  {
    name: 'Fitness Tracker',
    description: 'Track your workouts, steps, and sleep with this advanced fitness tracker.',
    price: '₦12,500',
    image: pots,
  },
];
