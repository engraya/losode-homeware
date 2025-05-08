import { StaticImageData } from 'next/image';
import { cups, cotton, wood, pots, tableSetting, kitchenUtensils } from '../components/assets';
export interface Product {
  name: string;
  description: string;
  price: string;
  image: StaticImageData;
}

export const products: Product[] = [
  {
    name: 'Ceramic Cup Tray Set',
    description: 'A beautifully crafted set of ceramic cups neatly arranged on a wooden tray — perfect for serving guests with style.',
    price: '₦74,030',
    image: cups,
  },
  {
    name: 'Handcrafted Wooden Sculptures',
    description: 'Elegant wooden decor pieces carved by artisans to bring warmth and natural charm to your living space.',
    price: '₦255,000',
    image: wood,
  },
  {
    name: 'Elegant Kitchen Utensils',
    description: 'A premium set of kitchen tools designed for both style and function—perfect for modern culinary spaces.',
    price: '₦25,000',
    image: kitchenUtensils,
  },  
  {
    name: 'Dinner Table Setting Set',
    description: 'An elegant dining set curated to elevate your table décor—ideal for hosting and everyday luxury.',
    price: '₦12,500',
    image: tableSetting,
  }
  
];
