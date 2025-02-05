import Root from "./Root";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import ProductProvider from "./provider/ProductProvider";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <ProductProvider>
      <Root />
    </ProductProvider>
  </HashRouter>
);
