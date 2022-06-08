export interface FeaturedRestaurant {
  name: string;
  isFavorited?: boolean;
  reviewCount: number;
  image: any;
}
export const FEATURED_RESTAURANTS: FeaturedRestaurant[] = [
  {
    name: "McDonald's",
    isFavorited: true,
    reviewCount: 40,
    image: require("../../../../../assets/img/mcdonalds.png"),
  },
  {
    name: "Starbucks",
    reviewCount: 10,
    image: require("../../../../../assets/img/mcdonalds.png"),
  },
  {
    name: "BK",
    isFavorited: true,
    reviewCount: 40,
    image: require("../../../../../assets/img/mcdonalds.png"),
  },
];
