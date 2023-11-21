import { Actions, Colors, Type } from "./Product";

export interface BadgeProps {
  id: number;
  type: Type;
  amount: number;
  action: Actions;
  selectedColor: Colors;
}

export interface CheckboxProps {
  linked: boolean;
  onClickFunction: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
}

export interface ToggleSwitchProps {
  id: number;
  active: boolean;
  onChangeFunction: () => void;
}
