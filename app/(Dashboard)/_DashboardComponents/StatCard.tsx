import {
  Phone,
  MessageSquare,
  RefreshCw,
  Calendar,
  XCircle,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  iconBg: string;
  badge?: {
    text: string;
    color: string;
  };
}

function StatCard({
  title,
  value,
  change,
  isPositive,
  icon,
  iconBg,
  badge,
}: StatCardProps) {
  return (
    <Card className="bg-[#0f1535] border-[#1a2038] relative">
      <CardContent className="p-4 sm:p-6">
        {badge && (
          <Badge
            className="absolute top-4 right-4 border-0 text-white hidden sm:flex"
            style={{ backgroundColor: badge.color }}
          >
            <Calendar className="w-3 h-3" />
            {badge.text}
          </Badge>
        )}

        <div className="flex items-start justify-between mb-3">
          <span className="text-gray-400 text-xs sm:text-sm">{title}</span>
          <div
            className={`w-8 h-8 sm:w-10 sm:h-10 ${iconBg} rounded-lg flex items-center justify-center`}
          >
            {icon}
          </div>
        </div>

        <div className="flex items-end gap-2">
          <span className="text-white text-2xl sm:text-3xl font-semibold">
            {value}
          </span>
          <span
            className={`text-xs sm:text-sm mb-0.5 sm:mb-1 ${isPositive ? "text-green-400" : "text-red-400"}`}
          >
            {change}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsGrid() {
  const stats = [
    {
      title: "Total Calls Today",
      value: "127",
      change: "+12%",
      isPositive: true,
      icon: <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      iconBg: "bg-blue-500",
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      change: "+77%",
      isPositive: true,
      icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      iconBg: "bg-pink-500",
    },
    {
      title: "Warm Transfer",
      value: "23",
      change: "+18%",
      isPositive: true,
      icon: <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      iconBg: "bg-orange-500",
    },
    {
      title: "Appointments Booked",
      value: "34",
      change: "+8%",
      isPositive: true,
      icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      iconBg: "bg-green-500",
      badge: {
        text: "MD. TUSHAR MAMUN",
        color: "#10b981",
      },
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      change: "-3%",
      isPositive: false,
      icon: <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      iconBg: "bg-red-500",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      change: "+15%",
      isPositive: true,
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />,
      iconBg: "bg-blue-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}
