
import { Home, BarChart3, PieChart, TrendingUp, Settings, Users, Calendar, FileText } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
    isActive: true,
  },
  {
    title: "Analytics",
    url: "#",
    icon: BarChart3,
  },
  {
    title: "Reports",
    url: "#",
    icon: PieChart,
  },
  {
    title: "Trends",
    url: "#",
    icon: TrendingUp,
  },
];

const managementItems = [
  {
    title: "Users",
    url: "#",
    icon: Users,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Documents",
    url: "#",
    icon: FileText,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 p-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm">Chart Charm</span>
            <span className="text-xs text-muted-foreground">Analytics Dashboard</span>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-2">
            Analytics
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={item.isActive}
                    className="w-full justify-start gap-3 hover:bg-accent/50 transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground mb-2">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managementItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    className="w-full justify-start gap-3 hover:bg-accent/50 transition-colors"
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2 rounded-md">
                      <item.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-white">JD</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">Admin</span>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
