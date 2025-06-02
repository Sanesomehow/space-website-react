import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Layout } from "./layouts/Layout.tsx";
import { Home } from './routes/Home'
import { Destination } from './routes/Destination'
import { Crew } from './routes/Crew'
import { Technology } from './routes/Technology'



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="technology" element={<Technology />} />
          <Route path="crew" element={<Crew />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
