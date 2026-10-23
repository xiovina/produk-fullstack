import { Home, Settings, User, FolderGit } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Proyek",
    url: "#",
    icon: FolderGit,
  },
  {
    title: "Profil",
    url: "#",
    icon: User,
  },
  {
    title: "Pengaturan",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu Utama</SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="flex items-center gap-3 p-2 hover:bg-slate-100 rounded-md"
                    >
                      <item.icon className="w-5 h-5 text-slate-600" />
                      <span className="font-medium">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>

        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}