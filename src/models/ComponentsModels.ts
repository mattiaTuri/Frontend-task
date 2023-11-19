import { Actions, Colors, Type } from "./Product";

export interface BadgeProps {
  type: Type;
  amount: number;
  action: Actions;
  selectedColor: Colors;
}
