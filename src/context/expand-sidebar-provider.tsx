import React, { createContext, useContext, useState } from "react";

interface ExpandSidebarContextType {
  openMenu: boolean;
  sidebarToggle: () => void;
  setOpenMenu: (value: boolean) => void;
}

type ExpandSidebarProps = {
  children: React.ReactNode;
};

const ExpandSidebarContext = createContext<ExpandSidebarContextType | undefined>(
  undefined
);

export const ExpandSidebarProvider = ({ children }: ExpandSidebarProps) => {

   const [openMenu, setOpenMenu] = useState<boolean>(false);

   const sidebarToggle = () => {
     setOpenMenu(!openMenu);
   };

  return (
    <ExpandSidebarContext.Provider
      value={{
        openMenu,
        sidebarToggle,
        setOpenMenu,
      }}
    >
      {children}
    </ExpandSidebarContext.Provider>
  );
};

export const useExpandSidebarContext = () => useContext(ExpandSidebarContext) as ExpandSidebarContextType;
