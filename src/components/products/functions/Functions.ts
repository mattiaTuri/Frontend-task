import { Colors, ProductProps } from "models/Product";

export const selectColor = (color: string) => {
  const colorSplitted: string[] = color.split("-");
  const newColor = colorSplitted[1] as Colors;

  return newColor;
};

export const applyBorderToSelectedColor = (
  id: number,
  e: React.MouseEvent<HTMLElement>
) => {
  document
    .querySelectorAll<HTMLElement>(`#badgeColoursGroup-${id} > div`)
    .forEach((elem: HTMLElement) => {
      elem.style.border = "0px";
    });

  const elem = e.target as HTMLButtonElement;
  elem.style.border = "1.5px solid #B0B0B0";
};

export const updateSwitchState = (productsList: ProductProps[], id: number) => {
  const newProductsList: ProductProps[] = productsList.map(
    (product: ProductProps) => {
      if (product.id == id) {
        return { ...product, active: true };
      } else {
        return { ...product, active: false };
      }
    }
  );

  return newProductsList;
};
