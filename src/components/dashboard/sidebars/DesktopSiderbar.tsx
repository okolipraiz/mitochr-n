import { ArrowUpFromLine, Dot, Globe, Mail, Settings2 } from "lucide-react";
import { CustomButton } from "@/components/dashboard/buttons/CustomButton";

const DesktopSiderbar = () => {
  return (
    <aside className="bg-primary-sidebar text-primary-sidebarForeground hidden h-screen border-r border-[#C0C9C0] transition-all lg:fixed lg:w-[22rem] shadow-sm lg:flex lg:flex-col">
      <div className="flex h-screen flex-col px-6 pb-5 pt-28">
        <div className="grid flex-grow grid-rows-[1fr_1fr_0.5fr] gap-5 overflow-y-auto">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-[#C0C9C0] px-4 py-5">
            <div className="flex items-center space-x-3">
              <img
                src="/images/dashboard/icons/user.svg"
                alt="Profile Picture"
                className="h-10 w-10 rounded-full"
              />
              <h2 className="text-xl font-medium">Ventura Brody</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail size="16" />
                <span>venturaBrody@co.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe size="17" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>

            <CustomButton
              className="flex w-full items-center space-x-2 justify-center rounded-xl border border-[#C0C9C0] py-4 font-medium"
              icon={<Settings2 />}
              text="Set up your account"
              type={"button"}
            />
          </div>

          <div className="flex h-full flex-col justify-between rounded-3xl border border-[#C0C9C0] px-4 py-5">
            <div className="flex items-center justify-between space-x-3">
              <div className="uppercase">TEAMS</div>
              <span className="rounded-md bg-[#C5FCD6] px-2 py-1 text-xs font-medium text-[#00361D]">
                Basic User
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="/images/dashboard/icons/source_environment.svg"
                    alt="Departments Picture"
                    className="h-6 w-6 rounded-full"
                  />
                  <span>Departments</span>
                </div>
                <div className="flex items-center space-x-2">0</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src="/images/dashboard/icons/units.svg"
                    alt="Units Picture"
                    className="h-6 w-6"
                  />
                  <span>Units</span>
                </div>
                <div className="flex items-center space-x-2">0</div>
              </div>
            </div>

            <CustomButton
              className="flex w-full items-center space-x-2 justify-center rounded-xl border border-[#C0C9C0] py-4 font-medium"
              icon={<ArrowUpFromLine />}
              text="Upgrade your plan"
              type={"button"}
            />
          </div>

          <div className="flex h-full flex-col justify-between rounded-3xl border border-[#C0C9C0] px-4 py-5">
            <div className="mb-2">LINKS</div>

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
      </div>

      <div className="flex w-full items-center border-t border-[#C0C9C0] p-4 pl-7">
        <div>Term of Service</div>
        <div>
          <Dot size="50" />
        </div>
        <div>Privacy Policy</div>
      </div>
    </aside>
  );
};

export default DesktopSiderbar;
