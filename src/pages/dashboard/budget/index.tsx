import DashboardLayout from "@/components/layouts/dashboard/DashboardLayout";
import { DashboardSideBar } from "@/components/layouts/dashboard/DashboardSideBar";
import { BudgetTabs } from "@/components/dashboard/tabs/BudgetTabs";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarDaysIcon } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { CustomButton } from "@/components/dashboard/buttons/CustomButton";

const BudgetRoom = () => {
  const [date, setDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [currentTab, setCurrentTab] = useState<
    "currencyAndTaxes" | "budgetLine" | "budgetRoomCentre" | "budgetControl"
  >("currencyAndTaxes");

  const [ngnAmount, setNgnAmount] = useState<string>("");
  const [usdAmount, setUsdAmount] = useState<string>("");

  const conversionRate: number = 1700; // 1 USD = 1700 NGN

  // Handle changes in the NGN input
  const handleNgnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ngnValue = e.target.value;
    setNgnAmount(ngnValue);
    if (ngnValue) {
      setUsdAmount((parseFloat(ngnValue) / conversionRate).toFixed(2));
    } else {
      setUsdAmount("");
    }
  };

  // Handle changes in the USD input
  const handleUsdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const usdValue = e.target.value;
    setUsdAmount(usdValue);
    if (usdValue) {
      setNgnAmount((parseFloat(usdValue) * conversionRate).toFixed(2));
    } else {
      setNgnAmount("");
    }
  };

  return (
    <DashboardLayout page={"budgetRoom"}>
      <DashboardSideBar className="lg:pl-[22rem]">
        <section>
          <div className="pr-6 lg:pr-0">
            <BudgetTabs currentTab={currentTab} setCurrentTab={setCurrentTab} />
          </div>

          <div className="mr-6 lg:mr-0 border-b border-[#C0C9C0] px-5 py-4">
            <div className="flex items-center space-x-8 overflow-x-auto whitespace-nowrap text-sm font-medium md:overflow-visible">
              <span>Finanical Year</span>
              <div className="flex items-center space-x-4">
                <span>Start</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center justify-start rounded-xl bg-[#EDEEEA] px-4 py-3 text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarDaysIcon className="mr-2 h-4 w-4" />
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span>Pick a start date</span>
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex items-center space-x-4">
                <span>End</span>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      className={cn(
                        "flex items-center justify-start rounded-xl bg-[#EDEEEA] px-4 py-3 text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarDaysIcon className="mr-2 h-4 w-4" />
                      {endDate ? (
                        format(endDate, "PPP")
                      ) : (
                        <span>Pick an end date</span>
                      )}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={endDate}
                      onSelect={setEndDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>

          {currentTab === "currencyAndTaxes" ? (
            <div className="mt-5 pr-5 lg:pl-[1.5rem]">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
                <div className="col-span-3 rounded-3xl border border-[#C0C9C0]">
                  <h4 className="border-b border-[#C0C9C0] px-4 py-5 text-xl font-medium">
                    Currency
                  </h4>
                  <div className="px-4 py-6">
                    <div className="flex items-center justify-between space-x-3">
                      <div>Principal Currency</div>
                      <span className="rounded-md bg-[#C5FCD6] px-2 py-1 text-xs font-medium text-[#00361D]">
                        Basic User
                      </span>
                    </div>

                    <div className="my-5">
                      <div className="relative">
                        <input
                          className="w-full rounded-xl bg-[#EDEEEA] py-4 pl-28"
                          placeholder="Naira"
                        />
                        <div className="absolute left-5 top-3 flex items-center space-x-2 font-medium">
                          <img
                            src="/images/dashboard/countries/ngn.svg"
                            height={40}
                            width={40}
                            alt="ngn"
                          />
                          <div>NGN</div>
                        </div>
                      </div>
                    </div>

                    <div className="my-5">
                      <label htmlFor="vat">Tax type</label>

                      <input
                        className="mt-1 w-full rounded-xl bg-[#EDEEEA] px-4 py-4"
                        placeholder="Value Added Tax (VAT)"
                        type="number"
                        id="vat"
                      />
                    </div>

                    <div className="flex w-full gap-x-4">
                      <div className="w-full">
                        <label htmlFor="vat">Tax rate</label>
                        <input
                          className="mt-1 w-full rounded-xl bg-[#EDEEEA] px-4 py-4"
                          placeholder="Fixed amount"
                          type="number"
                          id="vat"
                        />
                      </div>
                      <div className="w-full">
                        <label htmlFor="vat">Tax rate unit</label>
                        <input
                          className="mt-1 w-full rounded-xl bg-[#EDEEEA] px-4 py-4"
                          placeholder="30.00"
                          step="any"
                          type="number"
                          id="vat"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[#C0C9C0] px-4 py-5">
                    <CustomButton
                      className="bg-vendpalGreen flex w-full items-center justify-center space-x-2 rounded-xl py-4 text-[#C5FCD6]"
                      icon={
                        <img
                          src="/images/dashboard/overview/contract_edit-green.svg"
                          alt="Department Picture"
                          className="h-5 w-5"
                        />
                      }
                      text="Edit overview"
                      type={"button"}
                    />
                  </div>
                </div>

                <div className="col-span-3 space-y-4">
                  <div className="rounded-3xl border border-[#C0C9C0]">
                    <h4 className="border-b border-[#C0C9C0] px-4 py-5 text-xl font-medium">
                      Conversion rate
                    </h4>

                    <div className="px-4 py-6">
                      <div className="space-y-5">
                        <div className="relative">
                          <input
                            className="w-full rounded-xl bg-[#EDEEEA] py-4 pl-28"
                            placeholder="Enter Amount here"
                            value={ngnAmount}
                            onChange={handleNgnChange}
                            type="number"
                          />
                          <div className="absolute left-5 top-3 flex items-center space-x-2 font-medium">
                            <img
                              src="/images/dashboard/countries/ngn.svg"
                              height={40}
                              width={40}
                              alt="ngn"
                            />
                            <div>NGN</div>
                          </div>
                        </div>

                        <div className="relative">
                          <input
                            className="w-full rounded-xl bg-[#EDEEEA] py-4 pl-28"
                            placeholder="Enter Amount here"
                            value={usdAmount}
                            onChange={handleUsdChange}
                            type="number"
                          />
                          <div className="absolute left-5 top-3 flex items-center space-x-2 font-medium">
                            <img
                              src="/images/dashboard/countries/usa.svg"
                              height={40}
                              width={40}
                              alt="usa"
                            />
                            <div>USA</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl bg-[#FFDAD6] px-5 py-6 text-[#BA1A1A]">
                    You cannot change the Principal Currency once <br /> the
                    financial year has commenced
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="py-10 text-center text-[#959190]">
                <h2>Coming soon</h2>
                <p>
                  We are currently working on this feature. Please check back
                  later for updates.
                </p>
              </div>
            </div>
          )}
        </section>
      </DashboardSideBar>
    </DashboardLayout>
  );
};
export default BudgetRoom;
