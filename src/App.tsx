import { useEffect } from "react";
import Products from "./pages/Products";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store/store";
import { setLoadingState } from "store/Product/productsSlice";
import { getProduct } from "controller/api";

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(setLoadingState({ loading: true, error: "" }));
    dispatch(getProduct());
  }, []);

  return (
    <div className="h-screen flex justify-center items-center">
      <Products />
    </div>
  );
}

export default App;
