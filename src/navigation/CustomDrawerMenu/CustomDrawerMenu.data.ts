import { MenuItemType } from "./CustomDrawerMenu.types";

export const MENU_LIST: MenuItemType[] = [
  {
    icon: require("../../../assets/img/document.png"),
    name: "My Orders",
    screen: "Orders",
  },
  {
    icon: require("../../../assets/img/profile.png"),
    name: "My Profile",
    screen: "Profile",
  },
  {
    icon: require("../../../assets/img/location.png"),

    name: "Delivery Address",
    screen: "DeliveryAddrress",
  },
  {
    icon: require("../../../assets/img/wallet.png"),

    name: "Payment Methods",
    screen: "PaymentMethods",
  },
  {
    icon: require("../../../assets/img/message.png"),
    name: "Contact Us",
    screen: "ContactUs",
  },
  {
    icon: require("../../../assets/img/setting.png"),
    name: "Settings",
    screen: "Settings",
  },
  {
    icon: require("../../../assets/img/helps.png"),
    name: "Helps & FAQs",
    screen: "Helps",
  },
];
