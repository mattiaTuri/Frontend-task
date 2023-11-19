import { ProductWidgetProps } from "../models/ProductWidget";

export const productsWidget: ProductWidgetProps[] = [
  {
    id: 1,
    type: "plastic bottles",
    amount: 100,
    action: "collects",
    active: true,
    linked: true,
    selectedColor: "green",
  },
  {
    id: 2,
    type: "trees",
    amount: 10,
    action: "plants",
    active: false,
    linked: false,
    selectedColor: "black",
  },
  {
    id: 3,
    type: "carbon",
    amount: 100,
    action: "offsets",
    active: false,
    linked: false,
    selectedColor: "blue",
  },
];
