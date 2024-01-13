import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Search = lazy(() => import("./components/Search"));

// Admin Panel

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Transactions = lazy(() => import("./pages/admin/Transactions"));
const Customers = lazy(() => import("./pages/admin/Customers"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>

            {/* Admin Panel */}

            <Route path="/admin/dashboard" element={<Dashboard></Dashboard>}></Route>
            <Route path="/admin/product" element={<Products></Products>}></Route>
            <Route path="/admin/customer" element={<Customers></Customers>}></Route>
            <Route path="/admin/transaction" element={<Transactions></Transactions>}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
