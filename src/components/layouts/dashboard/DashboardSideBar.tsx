import MobileSidebar from "@/components/dashboard/sidebars/MobileSidebar";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { useExpandSidebarContext } from "../../../context/expand-sidebar-provider"; // Assuming the context is imported like this
import DesktopSiderbar from "@/components/dashboard/sidebars/DesktopSiderbar";

interface DashboardSidebarProps {
  children: ReactNode;
  className?: string;
}

export const DashboardSideBar: React.FC<DashboardSidebarProps> = ({
  children,
  className,
}) => {
  const location = useLocation();
  const { openMenu, setOpenMenu } = useExpandSidebarContext();

  return (
    <>
      <div className="relative text-sm">
        {/* Desktop Side Bar */}
        <DesktopSiderbar />
        {/* Desktop Side Bar End */}

        {/* Mobile Side Bar */}
        <MobileSidebar
          location={location}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
        {/* Mobile Side Bar End*/}

        <div
          className={`${
            className ? className : "lg:pl-[23.55rem] pr-6"
          } lg:pt-30 h-full min-h-screen w-full pl-5 pt-32 transition-all lg:min-h-screen`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
