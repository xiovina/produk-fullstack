"use client";

import { usePathname } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/layout/app-sidebar";

export function LayoutWrapper({children}: {children: React.ReactNode}) {
  const pathname = usePathname();

  const isAuthpage = pathname.startsWith("/auth");

  if (isAuthpage) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}