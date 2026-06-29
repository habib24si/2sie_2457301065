import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import TailwindCSS from "./TailwindCSS";
import UserForm from "../components/UserForm";
import HitungGajiForm from "../components/HitungGajiForm";
import './tailwind.css';

createRoot(document.getElementById("root"))
  .render(
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TailwindCSS />} />
          <Route path="/userform" element={<UserForm />} />
          <Route path="/hitung-gaji" element={<HitungGajiForm />} />
        </Route>
      </Routes>
    </HashRouter>
  )
