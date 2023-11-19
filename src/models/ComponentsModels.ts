import { Actions, Colors, Type } from "./ProductWidget";

export interface BadgeProps {
  type: Type;
  amount: number;
  action: Actions;
  selectedColor: Colors;
}
