export interface FeaturedRestaurant {
  name: string;
  isFavorited?: boolean;
  reviewCount: number;
}
export const FEATURED_RESTAURANTS: FeaturedRestaurant[] = [
  {
    name: "McDonald's",
    isFavorited: true,
    reviewCount: 40,
  },
  {
    name: "Starbucks",
    reviewCount: 10,
  },
];
