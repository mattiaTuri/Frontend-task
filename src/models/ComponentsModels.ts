import { Actions, Colors, Type } from "./Product";

export interface BadgeProps {
  id: number;
  type: Type;
  amount: number;
  action: Actions;
  selectedColor: Colors;
}
