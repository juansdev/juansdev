'use client';

import {createContext, ReactNode, useContext} from "react";
import {ManageDependency} from "@/crossSectional";

const DependencyContext = createContext(ManageDependency.getInstance().dependencies);

export function useDependencyContext() {
  return useContext(DependencyContext);
}

export function DependencyProviderApplicationProviders({
                                                         children,
                                                       }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <DependencyContext.Provider value={ManageDependency.getInstance().dependencies}>
      {children}
    </DependencyContext.Provider>
  );
}