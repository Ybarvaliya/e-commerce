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
const NewProduct = lazy(() => import("./pages/admin/Management/NewProduct"));
const Product = lazy(() => import("./pages/admin/Management/Product"));
const Transaction = lazy(() => import("./pages/admin/Management/Transaction"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>

            {/* Admin Panel - Pages*/}

            <Route path="/admin/dashboard" element={<Dashboard />}></Route>
            <Route path="/admin/product" element={<Products />}></Route>
            <Route path="/admin/customer" element={<Customers />}></Route>
            <Route path="/admin/transaction" element={<Transactions />}></Route>

            {/* Admin Panel - Charts */}

            {/* Admin Panel - Apps */}

            {/* Admin Panel - Management */}

            <Route path="/admin/product/new" element={<NewProduct />}></Route>
            <Route path="/admin/product/:id" element={<Product />}></Route>
            <Route path="/admin/transaction/:id" element={<Transaction />}></Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
