import { AxiosRequestConfig } from "axios";
import { ProductWidgetProps } from "./ProductWidget";

export interface AxiosResponse<T = never> {
  data: ProductWidgetProps[];
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: AxiosRequestConfig<T>;
  request?: any;
}
