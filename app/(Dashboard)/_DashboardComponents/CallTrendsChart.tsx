import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const data = [
  { day: "Mon", calls: 45 },
  { day: "Tue", calls: 52 },
  { day: "Wed", calls: 61 },
  { day: "Thu", calls: 80 },
  { day: "Fri", calls: 95 },
  { day: "Sat", calls: 88 },
  { day: "Sun", calls: 51 },
];

export function CallTrendsChart() {
  return (
    <Card className="bg-[#0f1535] border-[#1a2038]">
      <CardHeader>
        <CardTitle className="text-white text-base sm:text-lg">
          Call Trends - This Week
        </CardTitle>
        <CardDescription className="text-gray-400 text-xs sm:text-sm">
          Total: 472 calls
        </CardDescription>
        <CardAction>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#1a2038] border-[#1a2038] text-white hover:bg-[#242d4a] hover:text-white text-xs sm:text-sm"
          >
            This Week
            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
          </Button>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="w-full h-[250px] sm:h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="callGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2038" />
              <XAxis
                dataKey="day"
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                axisLine={{ stroke: "#1a2038" }}
              />
              <YAxis
                stroke="#6b7280"
                tick={{ fill: "#9ca3af", fontSize: 12 }}
                axisLine={{ stroke: "#1a2038" }}
                width={30}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f1535",
                  border: "1px solid #1a2038",
                  borderRadius: "8px",
                  color: "#fff",
                  fontSize: "12px",
                }}
              />
              <Area
                type="monotone"
                dataKey="calls"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#callGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
