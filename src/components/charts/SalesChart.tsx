
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { date: "Jan 1", desktop: 186, mobile: 80, tablet: 45 },
  { date: "Jan 8", desktop: 305, mobile: 200, tablet: 98 },
  { date: "Jan 15", desktop: 237, mobile: 120, tablet: 86 },
  { date: "Jan 22", desktop: 73, mobile: 190, tablet: 99 },
  { date: "Jan 29", desktop: 209, mobile: 130, tablet: 102 },
  { date: "Feb 5", desktop: 214, mobile: 140, tablet: 87 },
  { date: "Feb 12", desktop: 290, mobile: 180, tablet: 114 },
];

export function SalesChart() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="text-lg">Sales Analytics</CardTitle>
          <CardDescription>Sales performance across different devices</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis 
                  dataKey="date" 
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
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="desktop" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={{ fill: "#8884d8", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mobile" 
                  stroke="#82ca9d" 
                  strokeWidth={2}
                  dot={{ fill: "#82ca9d", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="tablet" 
                  stroke="#ffc658" 
                  strokeWidth={2}
                  dot={{ fill: "#ffc658", strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
