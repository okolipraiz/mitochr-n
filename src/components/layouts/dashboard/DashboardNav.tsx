import { handleNotifyComingSoon } from "@/utils/notification";
import {
  Bell,
  ChevronLast,
  LayoutGrid,
  MessageSquareText
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useExpandSidebarContext } from "../../../context/expand-sidebar-provider";

function DashboardNav() {
  const { sidebarToggle } = useExpandSidebarContext();

  const navigate = useNavigate();

  const isActive = (path: string) => window.location.pathname === path;

  return (
    <>
      <nav
        className={`bg-primary-navbar fixed top-0 z-50 w-full border-b border-[#C0C9C0] bg-white px-5 py-6 md:px-6 lg:py-4`}
      >
        <div className={`flex items-center justify-between`}>
          <div className="flex items-center space-x-16">
            <img src="/images/vendpal-green.svg" className="w-28  md:w-auto md:h-auto  " alt="logo" />

            <div className="hidden lg:flex">
              <div className="rounded-3xl bg-[#EDEEEA] px-3 py-2">
                <ul className="flex items-center space-x-2 text-sm font-normal">
                  <li
                    className={`flex items-center space-x-2 rounded-2xl ${
                      isActive("/dashboard")
                        ? "bg-white px-4 py-3"
                        : "px-4 py-3 hover:bg-[#EDEcEA]"
                    }`}
                    onClick={() => navigate("/dashboard")}
                  >
                    <LayoutGrid />
                    <span>Dashboard</span>
                  </li>

                  <li
                    className={`flex items-center space-x-2 cursor-pointer rounded-2xl ${
                      isActive("/dashboard/approve")
                        ? "bg-white px-4 py-3"
                        : "px-4 py-3 hover:bg-[#c9c9c9]"
                    }`}
                    onClick={() =>
                      handleNotifyComingSoon(
                        "Approve Workflow Coming soon...",
                        toast
                      )
                    }
                  >
                    <img
                      src="/images/dashboard/icons/workflow.svg"
                      alt="Approve Workflow Picture"
                      className="h-6 w-6"
                    />
                    <span>Approve Workflow</span>
                  </li>

                  <li
                    className={`flex cursor-pointer items-center space-x-2 rounded-2xl ${
                      isActive("/dashboard/budget")
                        ? "bg-white px-4 py-3"
                        : "px-4 py-3 hover:bg-[#c9c9c9]"
                    }`}
                    onClick={() => navigate("/dashboard/budget")}
                  >
                    <img
                      src="/images/dashboard/icons/budget.svg"
                      alt="Units Picture"
                      className="h-6 w-6"
                    />
                    <span>Budget room</span>
                  </li>

                  <li
                    className={`flex items-center space-x-2 rounded-2xl cursor-pointer ${
                      isActive("/dashboard/analytics")
                        ? "bg-white px-4 py-3"
                        : "px-4 py-3 hover:bg-[#c9c9c9]"
                    }`}
                    onClick={() =>
                      handleNotifyComingSoon("Analytics Coming soon...", toast)
                    }
                  >
                    <img
                      src="/images/dashboard/icons/analytics.svg"
                      alt="Units Picture"
                      className="h-6 w-6"
                    />
                    <span>Analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <ul className="flex items-center space-x-4">
              <li>
                <div className="rounded-full bg-[#F3F4EF] p-4 hover:bg-gray-100">
                  <Bell className="text-vendpalGreen" />
                </div>
              </li>

              <li>
                <div className="rounded-full bg-[#F3F4EF] p-4 hover:bg-gray-100">
                  <MessageSquareText />
                </div>
              </li>

              <li className="block lg:hidden">
                <div>
                  <button
                    className="rounded-full bg-[#F3F4EF] p-4 text-black hover:bg-gray-100"
                    onClick={sidebarToggle}
                  >
                    <ChevronLast />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashboardNav;
