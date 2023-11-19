import { RootState } from "../store";

export function productSelector(state: RootState) {
  return state.products;
}
