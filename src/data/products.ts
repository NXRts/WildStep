export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Summit Pro Tent 2P',
    description: 'Ultra-lightweight 2-person tent for alpine expeditions. Waterproof and wind-resistant.',
    price: 2500000,
    category: 'Tents',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Terra Trekker Backpack 65L',
    description: 'Ergonomic 65L backpack with adjustable suspension system and rain cover included.',
    price: 1800000,
    category: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Alpine Hiker Boots',
    description: 'Rugged hiking boots with Vibram soles and Gore-Tex lining for all-weather comfort.',
    price: 1200000,
    category: 'Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Glacier Sleeping Bag -10C',
    description: 'Warm synthetic sleeping bag rated for -10C, perfect for winter camping.',
    price: 950000,
    category: 'Sleeping Bags',
    image: 'https://images.unsplash.com/photo-1517176118179-652467d43d1f?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },
  {
    id: '5',
    name: 'Trailblazer Headlamp 500',
    description: 'Bright 500 lumen headlamp with rechargeable battery and multiple modes.',
    price: 350000,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1596460658925-56d11b22e1b1?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
  },
  {
    id: '6',
    name: 'Portable Camping Stove',
    description: 'Compact and efficient gas stove for cooking meals on the trail.',
    price: 450000,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1520038827476-886ecfdcb86d?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
];

export const categories = [
  'All',
  'Tents',
  'Backpacks',
  'Shoes',
  'Sleeping Bags',
  'Accessories',
  'Gear'
];
