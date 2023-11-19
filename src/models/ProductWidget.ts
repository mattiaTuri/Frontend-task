export interface ProductProps {
  loading: boolean;
  products: ProductWidgetProps[];
  error: string;
}

export interface ProductWidgetProps {
  id: number;
  type: Type;
  amount: number;
  action: Actions;
  active: boolean;
  linked: boolean;
  selectedColor: Colors;
}

export type Type = "carbon" | "plastic bottles" | "trees";
export type Actions = "collects" | "plants" | "offsets";
export type Colors = "white" | "black" | "blue" | "green" | "beige";
