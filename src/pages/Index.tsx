
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { NavigationHeader } from "@/components/NavigationHeader";
import { Dashboard } from "@/components/Dashboard";
import { ThemeProvider } from "@/components/ThemeProvider";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dashboard-theme">
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AppSidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <NavigationHeader />
            <main className="flex-1 overflow-y-auto p-4 lg:p-6">
              <Dashboard />
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
