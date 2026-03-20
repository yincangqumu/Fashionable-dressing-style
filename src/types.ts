/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Tab = 'home' | 'scan' | 'inspiration' | 'profile';

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export interface Outfit {
  id: string;
  title: string;
  lastWorn: string;
  tags: string[];
  image: string;
}

export interface TrendingItem {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  image: string;
  likes: string;
  category: string;
}
