import { ProductTypes } from "../ProductCard/ProductCard.types";

export interface StockEditDialogTypes {
  open: boolean;
  setOpen: any;
  loading: boolean;
  setLoading: any;
  product: ProductTypes;
  fetchCarts?: () => void;
}
