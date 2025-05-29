
import { motion } from "framer-motion";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { TrafficChart } from "@/components/charts/TrafficChart";
import { SalesChart } from "@/components/charts/SalesChart";
import { PerformanceChart } from "@/components/charts/PerformanceChart";
import { StatsCards } from "@/components/StatsCards";
import { AnalyticsSection } from "@/components/sections/AnalyticsSection";
import { ReportsSection } from "@/components/sections/ReportsSection";
import { TrendsSection } from "@/components/sections/TrendsSection";
import { UsersSection } from "@/components/sections/UsersSection";
import { CalendarSection } from "@/components/sections/CalendarSection";
import { DocumentsSection } from "@/components/sections/DocumentsSection";
import { useNavigation } from "@/hooks/useNavigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Dashboard() {
  const { currentSection } = useNavigation();

  const renderSection = () => {
    switch (currentSection) {
      case "analytics":
        return <AnalyticsSection />;
      case "reports":
        return <ReportsSection />;
      case "trends":
        return <TrendsSection />;
      case "users":
        return <UsersSection />;
      case "calendar":
        return <CalendarSection />;
      case "documents":
        return <DocumentsSection />;
      default:
        return (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <StatsCards />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <RevenueChart />
              </motion.div>
              <motion.div variants={itemVariants}>
                <TrafficChart />
              </motion.div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <motion.div variants={itemVariants} className="xl:col-span-2">
                <SalesChart />
              </motion.div>
              <motion.div variants={itemVariants}>
                <PerformanceChart />
              </motion.div>
            </div>
          </motion.div>
        );
    }
  };

  return renderSection();
}
