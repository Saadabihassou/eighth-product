
import { Home, BarChart3, PieChart, TrendingUp, Settings, Users, Calendar, FileText, LogOut } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { useNavigation } from "@/hooks/useNavigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  {
    title: "Dashboard",
    section: "dashboard" as const,
    icon: Home,
  },
  {
    title: "Analytics",
    section: "analytics" as const,
    icon: BarChart3,
  },
  {
    title: "Reports",
    section: "reports" as const,
    icon: PieChart,
  },
  {
    title: "Trends",
    section: "trends" as const,
    icon: TrendingUp,
  },
];

const managementItems = [
  {
    title: "Users",
    section: "users" as const,
    icon: Users,
  },
  {
    title: "Calendar",
    section: "calendar" as const,
    icon: Calendar,
  },
  {
    title: "Documents",
    section: "documents" as const,
    icon: FileText,
  },
  {
    title: "Settings",
    section: "settings" as const,
    icon: Settings,
  },
];

export function AppSidebar() {
  const { currentSection, setCurrentSection } = useNavigation();

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
                    isActive={currentSection === item.section}
                    className="w-full justify-start gap-3 hover:bg-accent/50 transition-colors"
                    onClick={() => setCurrentSection(item.section)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.title}</span>
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
                    isActive={currentSection === item.section}
                    className="w-full justify-start gap-3 hover:bg-accent/50 transition-colors"
                    onClick={() => setCurrentSection(item.section)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="space-y-3">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-white">JD</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium">John Doe</span>
              <span className="text-xs text-muted-foreground">Admin</span>
            </div>
          </div>
          
          <Separator />
          
          {/* Logout button - will be functional once Supabase is connected */}
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-start gap-3 text-sm font-medium hover:bg-destructive/10 hover:text-destructive transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
