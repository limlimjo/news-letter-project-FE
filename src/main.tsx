import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./pages/layout"; // 레이아웃 컴포넌트
import ContentsList from "./pages/contents/ContentsList";
import ContentDetail from "./pages/contents/ContentDetail";
import Intro from "./pages/intro/Intro";

// msw 시작
async function initMocks() {
  const { worker } = await import("./mocks/browser");
  await worker.start({
    serviceWorker: { url: "/mockServiceWorker.js" },
  });
}

async function init() {
  if (import.meta.env.MODE === "development" || import.meta.env.VITE_USE_MOCK === "true") {
    await initMocks();
  }
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/intro" element={<Intro />} />
            <Route index element={<ContentsList />} />
            <Route path="/contents" element={<ContentsList />} />
            <Route path="/contents/:id" element={<ContentDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}

init();