import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <div className="bg-stone-100 xl:bg-white xl:min-h-screen">
        <div className="xl:max-w-[1280px] xl:mx-auto xl:min-h-screen xl:bg-stone-100">
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