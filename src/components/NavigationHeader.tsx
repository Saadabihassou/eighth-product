
import { Moon, Sun, Menu, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/components/ThemeProvider";

export function NavigationHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/20 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4 lg:px-6">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="lg:hidden hover:bg-accent/50 transition-colors duration-200">
            <Menu className="h-5 w-5" />
          </SidebarTrigger>
          <div className="flex flex-col">
            <h1 className="text-lg font-medium bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-xs text-muted-foreground/80 hidden sm:block">
              Welcome back! Here's your analytics overview.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {/* Authentication buttons - will be functional once Supabase is connected */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:bg-accent/50 transition-all duration-200"
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="hidden sm:flex items-center gap-2 text-sm font-medium hover:bg-accent/50 border-border/50 transition-all duration-200"
          >
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
          
          <div className="w-px h-6 bg-border/50 hidden sm:block" />
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="w-9 h-9 p-0 hover:bg-accent/50 transition-all duration-200 hover:rotate-12"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
