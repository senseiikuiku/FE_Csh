import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import "./assets/css/main.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes/index.routes";

createRoot(document.getElementById("root")).render(
   <StrictMode>
      <RouterProvider router={routers} />
   </StrictMode>
);
