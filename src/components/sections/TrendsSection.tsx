
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, BarChart3 } from "lucide-react";

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

const trends = [
  {
    title: "Revenue Growth",
    value: "+24.5%",
    description: "Compared to last quarter",
    icon: TrendingUp,
    trend: "up",
    color: "text-green-500"
  },
  {
    title: "User Acquisition",
    value: "+18.2%",
    description: "New users this month",
    icon: TrendingUp,
    trend: "up",
    color: "text-green-500"
  },
  {
    title: "Bounce Rate",
    value: "-12.8%",
    description: "Improvement in user retention",
    icon: TrendingDown,
    trend: "down",
    color: "text-green-500"
  },
  {
    title: "Conversion Rate",
    value: "+8.4%",
    description: "Better funnel optimization",
    icon: TrendingUp,
    trend: "up",
    color: "text-green-500"
  }
];

export function TrendsSection() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.div variants={itemVariants}>
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Trends</h2>
            <p className="text-muted-foreground">
              Track key performance indicators and emerging patterns
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {trends.map((trend, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{trend.title}</CardTitle>
                <trend.icon className={`h-4 w-4 ${trend.color}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${trend.color}`}>{trend.value}</div>
                <p className="text-xs text-muted-foreground">
                  {trend.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Market Trends
              </CardTitle>
              <CardDescription>
                Industry trends and market positioning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-medium">AI & Machine Learning</span>
                  <span className="text-green-500 font-semibold">+34%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-medium">Cloud Computing</span>
                  <span className="text-green-500 font-semibold">+28%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-medium">Cybersecurity</span>
                  <span className="text-green-500 font-semibold">+22%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-accent/50 rounded-lg">
                  <span className="font-medium">Remote Work Tools</span>
                  <span className="text-red-500 font-semibold">-8%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Performance Trends
              </CardTitle>
              <CardDescription>
                Key metrics trending over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
                Performance trend visualization
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle>Predictive Analytics</CardTitle>
            <CardDescription>
              AI-powered forecasting and trend predictions for the next quarter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
              Predictive analytics dashboard coming soon
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
