
import "./App.css";
import Loader from "./component/Loader/Loader";
import ErrorMessage from "./component/ErrorMessage/ErrorMessage";
import ProductList from "./component/ProductList/ProductList";
import SearchForm from "./component/SearchForm/SearchForm";
import { useProductSearch } from "./hooks/useProductSearch";
import RefExaple from "./component/RefExapl/RefExaple";


const AppMithHttp = () => {
  
    const {products, isLoading, isError, onSearchQuery } = useProductSearch()

  return (
    <div>
      <h1>Smart Ukrainian Big Product Store</h1>
      <RefExaple />
      <SearchForm onSearchQuery={onSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <ProductList products={products} />
    </div>
  );
};

export default AppMithHttp;