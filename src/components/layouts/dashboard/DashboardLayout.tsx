import React from "react";
import DashboardNav from "./DashboardNav"; // Ensure path is correct
import { ExpandSidebarProvider } from "../../../context/expand-sidebar-provider"; // Adjust path if needed

type DashboardPages = "dashboard" | "budgetRoom";

interface DashboardLayoutProps {
  children: React.ReactNode;
  page: DashboardPages;
}

const DashboardLayout = ({ children, }: DashboardLayoutProps) => {
  return (
    <>
      <ExpandSidebarProvider>
        <DashboardNav  />
        <main>{children}</main>
      </ExpandSidebarProvider>
    </>
  );
};

export default DashboardLayout;
