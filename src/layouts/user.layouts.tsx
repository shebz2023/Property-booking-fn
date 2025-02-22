import { Outlet } from "react-router-dom";
import bgImage from "../assets/topography.svg";
import SideBar from "../components/Dashboard/Sidebar";
export const UserLayout: React.FC = () => {
  return (
    <>
      <main
        className="flex bg-neutral-950"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <SideBar />
        <Outlet />
      </main>
    </>
  );
};
