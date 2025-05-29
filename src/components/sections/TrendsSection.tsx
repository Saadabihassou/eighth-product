
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Activity, BarChart3 } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";

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

const performanceTrendsData = [
  { month: "Jan", performance: 75, efficiency: 68, quality: 82 },
  { month: "Feb", performance: 78, efficiency: 72, quality: 85 },
  { month: "Mar", performance: 82, efficiency: 75, quality: 88 },
  { month: "Apr", performance: 85, efficiency: 78, quality: 90 },
  { month: "May", performance: 88, efficiency: 82, quality: 92 },
  { month: "Jun", performance: 91, efficiency: 85, quality: 94 }
];

const marketTrendsData = [
  { week: "Week 1", ai: 134, cloud: 128, security: 122, remote: 98 },
  { week: "Week 2", ai: 138, cloud: 132, security: 125, remote: 95 },
  { week: "Week 3", ai: 142, cloud: 136, security: 128, remote: 92 },
  { week: "Week 4", ai: 145, cloud: 140, security: 130, remote: 90 }
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
                Industry trends and market positioning (Index: 100 = baseline)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketTrendsData}>
                    <defs>
                      <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorCloud" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="week" 
                      className="text-xs fill-muted-foreground"
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground"
                      axisLine={false}
                      tickLine={false}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="ai"
                      stroke="#8884d8"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorAI)"
                      name="AI & ML"
                    />
                    <Area
                      type="monotone"
                      dataKey="cloud"
                      stroke="#82ca9d"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorCloud)"
                      name="Cloud Computing"
                    />
                    <Area
                      type="monotone"
                      dataKey="security"
                      stroke="#ffc658"
                      strokeWidth={2}
                      fillOpacity={0.1}
                      fill="#ffc658"
                      name="Cybersecurity"
                    />
                    <Area
                      type="monotone"
                      dataKey="remote"
                      stroke="#ff7c7c"
                      strokeWidth={2}
                      fillOpacity={0.1}
                      fill="#ff7c7c"
                      name="Remote Work"
                    />
                  </AreaChart>
                </ResponsiveContainer>
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
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={performanceTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                    <XAxis 
                      dataKey="month" 
                      className="text-xs fill-muted-foreground"
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      className="text-xs fill-muted-foreground"
                      axisLine={false}
                      tickLine={false}
                      domain={[60, 100]}
                    />
                    <Tooltip 
                      contentStyle={{
                        backgroundColor: "hsl(var(--background))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "6px",
                      }}
                      formatter={(value) => [`${value}%`, ""]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="performance" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Performance"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="efficiency" 
                      stroke="#82ca9d" 
                      strokeWidth={2}
                      dot={{ fill: "#82ca9d", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Efficiency"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="quality" 
                      stroke="#ffc658" 
                      strokeWidth={2}
                      dot={{ fill: "#ffc658", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                      name="Quality"
                    />
                  </LineChart>
                </ResponsiveContainer>
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
              AI-powered forecasting showing projected growth trends for the next quarter
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[
                  { month: "Current", actual: 100, predicted: null },
                  { month: "Next", actual: null, predicted: 108 },
                  { month: "Month 2", actual: null, predicted: 115 },
                  { month: "Month 3", actual: null, predicted: 123 }
                ]}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                  <XAxis 
                    dataKey="month" 
                    className="text-xs fill-muted-foreground"
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    className="text-xs fill-muted-foreground"
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--background))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "6px",
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="actual" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--primary))", strokeWidth: 2, r: 5 }}
                    name="Actual"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="predicted" 
                    stroke="#ff7c7c" 
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    dot={{ fill: "#ff7c7c", strokeWidth: 2, r: 5 }}
                    name="Predicted"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
