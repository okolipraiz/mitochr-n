/* eslint-disable @typescript-eslint/no-explicit-any */
interface BudgetTabProps {
  currentTab:
    | "currencyAndTaxes"
    | "budgetLine"
    | "budgetRoomCentre"
  | "budgetControl";
  
  setCurrentTab: any;
}

export const BudgetTabs = ({ currentTab, setCurrentTab }: BudgetTabProps) => {
  const tabs = [
    { id: "currencyAndTaxes", label: "Currency and Taxes" },
    { id: "budgetLine", label: "Budget Line" },
    { id: "budgetRoomCentre", label: "Budget Room Center" },
    { id: "budgetControl", label: "Budget Control" },
  ];

  return (
    <div className="py-4">
      <ul className="flex space-x-6 overflow-x-auto text-sm md:overflow-visible">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            onClick={() => {
              console.log(`Changing tab to: ${tab.id}`);
              setCurrentTab(tab.id);
            }}
            className={`cursor-pointer whitespace-nowrap ${
              currentTab === tab.id
                ? "rounded-none border-b-4 border-[#000000] px-4"
                : "px-4"
            } ${
              currentTab === tab.id && tab.id !== "currencyAndTaxes"
                ? "rounded-none border-b-4 border-[#000000] px-4"
                : "px-4"
            } ml-5 rounded-lg p-3 px-4 hover:bg-[#EDEEEA]`}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <hr className="border-[#C0C9C0]" />
    </div>
  );
};
