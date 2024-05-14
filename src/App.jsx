import { NavLink, Route, Routes } from "react-router-dom";
// import "./App.css";
import css from './App.module.css'
import clsx from "clsx";

// import Loader from "./component/Loader/Loader";


import MailBoxPage from './pages/MailBoxPage'
import ProductsPage from './pages/ProductsPage'
import SearchPage from './pages/SearchPage'


function App() {

const getNavLinkClass = ({isActive}) => clsx(css.navlink, {
  [css.active] : isActive
}) 

  return (
    <div>
      <header>
        <nav className={css.nav}>
          {/* <a target="blank" rel='noopener noreferrer' href="/products">Products</a> */}
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
          <Route path="/mailbox" element={<MailBoxPage />}/>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
