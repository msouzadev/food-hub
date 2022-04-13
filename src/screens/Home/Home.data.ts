export interface CategoryType {
  name: string;
  icon: any;
}
export const CATEGORIES: CategoryType[] = [
  { name: "Burguer", icon: require("../../../assets/img/burguer.png") },
  { name: "Donat", icon: require("../../../assets/img/donat.png") },
  { name: "Pizza", icon: require("../../../assets/img/pizza.png") },
  { name: "Mexican", icon: require("../../../assets/img/mexican.png") },
  { name: "Asian", icon: require("../../../assets/img/asian.png") },
];
