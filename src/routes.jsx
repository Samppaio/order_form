import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CheckoutPage } from "./shared/pages/CheckoutPage";
import { RequestPage } from "./shared/pages/RequestPage";

export function CustomRoutes() {
  return (
    <Router>
      <Link to="/" />
      <Link to="/checkout" />
      <Routes>
        <Route path="/" element={<RequestPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Routes>
    </Router>
  )
}