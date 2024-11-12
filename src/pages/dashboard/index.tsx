import React from "react";
import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { DashboardSideBar } from "@/components/layouts/dashboard/DashboardSideBar";
import { Dot } from "lucide-react";
import { CustomButton } from "@/components/dashboard/buttons/CustomButton";

const Dashboard: React.FC = () => {
  return (
    <DashboardLayout page="dashboard">
      <DashboardSideBar>
        <section>
          <div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="col-span-1 rounded-3xl bg-[#E6F2FF] px-4 py-5">
                <div className="rounded-xl bg-[#7DC9FF] px-6 py-8">
                  <p>
                    But now you can use Material's <br /> dynamic color feature
                    to <br />
                    automatically generate accessible colors assigned to each
                    "number."
                  </p>
                </div>
                <div className="block items-center justify-between space-x-2 pt-8 xl:flex">
                  <div>
                    <h6 className="text-lg font-medium">Design Team</h6>
                    <div className="flex items-center">
                      <span>1 Department</span> <Dot /> <span>1 Unit</span>{" "}
                    </div>
                  </div>

                  <img
                    src="/images/dashboard/overview/first-user.svg"
                    height={40}
                    width={40}
                    alt="Design revenue"
                  />
                </div>
              </div>

              <div className="col-span-1 rounded-3xl bg-[#FFF3B5] px-4 py-5">
                <div className="rounded-xl bg-[#FFE756] px-6 py-8">
                  <p>
                    But now you can use Material's <br /> dynamic color feature
                    to <br />
                    automatically generate accessible colors assigned to each
                    "number."
                  </p>
                </div>
                <div className="block items-center justify-between space-x-2 pt-8 xl:flex">
                  <div>
                    <h6 className="text-lg font-medium">Design Team</h6>
                    <div className="flex items-center">
                      <span>1 Department</span> <Dot /> <span>1 Unit</span>{" "}
                    </div>
                  </div>

                  <img
                    src="/images/dashboard/overview/second-user.svg"
                    height={40}
                    width={40}
                    alt="Design revenue"
                  />
                </div>
              </div>

              <div className="col-span-1 flex space-y-5 md:space-y-0 h-full flex-col justify-between rounded-lg bg-[#F3F4EF] px-4 py-5">
                <div className="  md:mt-6 flex items-center justify-center space-x-5 pt-4 text-2xl font-bold">
                  <img
                    src="/images/dashboard/overview/fill-form.svg"
                    height={70}
                    width={70}
                    alt="total revenue"
                  />
                </div>

                <CustomButton
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#C0C9C0] bg-white py-4 font-medium"
                  icon={
                    <img
                      src="/images/dashboard/overview/contract-edit-black.svg"
                      alt="Edit Picture"
                      className="h-6 w-6"
                    />
                  }
                  text="Create a department"
                  type={"button"}
                />
              </div>
            </div>
          </div>
        </section>
      </DashboardSideBar>
    </DashboardLayout>
  );
};

export default Dashboard;
