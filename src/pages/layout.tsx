import Header from "@/components/Header";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      <div className="min-w-[80rem] bg-white">
        <div className="flex min-h-screen">
          <div className="flex-1 flex flex-col">
            <Header />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
