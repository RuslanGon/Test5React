import { NavLink, Route, Routes } from "react-router-dom";
// import "./App.css";
import css from './App.module.css'
import clsx from "clsx";

// import Loader from "./component/Loader/Loader";


import MailBoxPage from './pages/MailBoxPage'
import ProductsPage from './pages/ProductsPage'
import SearchPage from './pages/SearchPage'
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";


function App() {

const getNavLinkClass = ({isActive}) => clsx(css.navlink, {
  [css.active] : isActive
}) 

  return (
    <div>
      <header>
        <nav className={css.nav}>
          {/* <a target="blank" rel='noopener noreferrer' href="/products">Products</a> */}
          <NavLink className={getNavLinkClass} to='/'>
            Home page
          </NavLink>
          <NavLink className={getNavLinkClass} to="/mailbox">
            MailBox
          </NavLink>
          <NavLink className={getNavLinkClass} to="/products">
            Products
          </NavLink>
          <NavLink className={getNavLinkClass} to="/search">
            Search
          </NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mailbox" element={<MailBoxPage />}/>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
