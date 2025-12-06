import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./pages/layout"; // 레이아웃 컴포넌트
import ContentsList from "./pages/contents/ContentsList";
import ContentDetail from "./pages/contents/ContentDetail";

// 개발 환경에서만 msw 시작
if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");
  await worker.start();
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<ContentsList />} />
          <Route path="/contents" element={<ContentsList />} />
          <Route path="/contents/:id" element={<ContentDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
