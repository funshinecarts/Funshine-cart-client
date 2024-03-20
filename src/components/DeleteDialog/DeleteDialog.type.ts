export interface DeleteDialogTypes {
  open: boolean;
  setOpen: any;
  loading: boolean;
  setLoading: any;
  product_id: string;
  fetchCarts?: () => void;
}
