import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Main/SideBar/Sidebar";

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-gray-100 text-second-text px-[30px] py-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
