import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./pages"; // 메인 페이지 컴포넌트
import RootLayout from "./pages/layout"; // 레이아웃 컴포넌트
import ContentsList from "./pages/contents/ContentsList";
import ContentsDetail from "./pages/contents/ContentsDetail";
import NewSubscriber from "./pages/subscribers/NewSubscriber";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<App />} />
          <Route path="/contents" element={<ContentsList />} />
          <Route path="/contents/:id" element={<ContentsDetail />} />
          <Route path="/subscribers/new" element={<NewSubscriber />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
