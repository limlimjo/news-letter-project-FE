import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <div className="max-w-[1280px] mx-auto bg-stone-100">
        <div className="flex min-h-screen">
          <div className="flex-1 flex flex-col">
            <Header />
            <Outlet />
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
