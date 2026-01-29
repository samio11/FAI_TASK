import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Activity {
  type: "success" | "warning" | "info" | "error";
  message: string;
  time: string;
}

const activities: Activity[] = [
  {
    type: "success",
    message: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
  },
  {
    type: "warning",
    message: "Warm transfer to technician - Software Issue",
    time: "5 min ago",
  },
  {
    type: "success",
    message: "Quote provided for iPad battery replacement",
    time: "8 min ago",
  },
  {
    type: "error",
    message: "Call dropped after 12 seconds",
    time: "15 min ago",
  },
];

const statusColors = {
  success: "bg-green-500",
  warning: "bg-orange-500",
  info: "bg-blue-500",
  error: "bg-red-500",
};

export function RecentActivity() {
  return (
    <Card className="bg-[#0f1535] border-[#1a2038]">
      <CardHeader>
        <CardTitle className="text-white text-base sm:text-lg">
          Recent Activity
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`w-2 h-2 ${statusColors[activity.type]} rounded-full mt-2 shrink-0`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-gray-300 text-xs sm:text-sm break-words">
                  {activity.message}
                </p>
                <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
