import { handleNotifyComingSoon } from "@/utils/notification";
import { ArrowUpFromLine, LayoutGrid, Settings2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "@/components/dashboard/buttons/CustomButton";

interface MobileSidebarProps {
  location: {
    pathname: string;
  };
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

const MobileSidebar = ({
  location,
  openMenu,
  setOpenMenu,
}: MobileSidebarProps) => {
  const navigate = useNavigate();

  return (
    <aside className="transition-width bg-primary-sidebar text-primary-sidebarForeground fixed z-40 flex h-full border-r bg-white duration-300 ease-in-out lg:hidden">
      <div
        className={`${
          openMenu ? "mx-6 w-60" : "w-0"
        } transition-width h-screen pt-16 duration-300 ease-in-out`}
      >
        {openMenu && (
          <>
            <div className="pt-[6rem] relative h-full">
              <ul className="space-y-5 text-start">
                <Link to="/dashboard">
                  <li
                    className={`flex items-center justify-start rounded-lg px-4 py-3 ${
                      location.pathname === "/dashboard"
                        ? "bg-white text-black"
                        : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() => setOpenMenu(false)}
                  >
                    <div className="mr-3 overflow-hidden transition-all">
                      <LayoutGrid size={"20"} />
                    </div>
                    <span className="overflow-hidden transition-all">
                      Dashboard
                    </span>{" "}
                  </li>
                </Link>

                <li
                  className={`flex items-center justify-start rounded-lg px-4 py-3 `}
                  onClick={() => {
                    setOpenMenu(false);
                    handleNotifyComingSoon(
                      "Approve Workflow Coming soon...",
                      toast
                    );
                  }}
                >
                  <div className="mr-3 overflow-hidden transition-all">
                    <img
                      src="/images/dashboard/icons/workflow.svg"
                      alt="Approve Workflow Picture"
                      className="h-6 w-6"
                    />
                  </div>
                  <span className="overflow-hidden transition-all">
                    Approve Workflow
                  </span>{" "}
                </li>

                <Link to="/dashboard/budget">
                  <li
                    className={`flex items-center justify-start rounded-lg px-4 py-3  mt-4 ${
                      location.pathname === "/dashboard/budget"
                        ? "bg-white text-black"
                        : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() => navigate("/dashboard/budget")}
                  >
                    <div className="mr-3 overflow-hidden transition-all">
                      <Users size={"20"} />
                    </div>
                    <span className="overflow-hidden transition-all">
                      Budget room
                    </span>{" "}
                  </li>
                </Link>

                <li
                  className={`flex items-center justify-start rounded-lg px-4 py-3`}
                  onClick={() => {
                    setOpenMenu(false);
                    handleNotifyComingSoon("Analytics Coming soon...", toast);
                  }}
                >
                  <div className="mr-3 overflow-hidden transition-all">
                    <img
                      src="/images/dashboard/icons/analytics.svg"
                      alt="Units Picture"
                      className="h-6 w-6"
                    />
                  </div>
                  <span className="overflow-hidden transition-all">
                    Analytics
                  </span>{" "}
                </li>
              </ul>

              <div className="absolute bottom-20 left-0 right-0 space-y-6">
                <CustomButton
                  className="flex w-full items-center space-x-2 justify-center rounded-xl border border-[#C0C9C0] py-4 font-medium"
                  icon={<ArrowUpFromLine />}
                  text="Upgrade your plan"
                  type={"button"}
                />

                <CustomButton
                  className="flex w-full items-center space-x-2 justify-center rounded-xl border border-[#C0C9C0] py-4 font-medium"
                  icon={<Settings2 />}
                  text="Set up your account"
                  type={"button"}
                />

                <CustomButton
                  className="flex w-full items-center space-x-2 justify-center rounded-xl border border-[#C0C9C0] py-4 font-medium"
                  icon={
                    <img
                      src="/images/dashboard/icons/captive.svg"
                      alt="Linkedin Picture"
                      className="h-6 w-6"
                    />
                  }
                  text="Linkedin"
                  type={"button"}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default MobileSidebar;
