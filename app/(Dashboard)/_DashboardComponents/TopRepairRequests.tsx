import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface RepairRequest {
  name: string;
  count: number;
  percentage: number;
  color: string;
}

const requests: RepairRequest[] = [
  {
    name: "Screen Repair",
    count: 156,
    percentage: 78,
    color: "bg-cyan-500",
  },
  {
    name: "Battery Replacement",
    count: 89,
    percentage: 45,
    color: "bg-blue-500",
  },
  {
    name: "Back Glass Repair",
    count: 67,
    percentage: 34,
    color: "bg-cyan-400",
  },
  {
    name: "Software Issues",
    count: 45,
    percentage: 23,
    color: "bg-blue-400",
  },
];

export function TopRepairRequests() {
  return (
    <Card className="bg-[#0f1535] border-[#1a2038]">
      <CardHeader>
        <CardTitle className="text-white text-base sm:text-lg">
          Top Repair Requests
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 sm:space-y-5">
          {requests.map((request, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-300 text-xs sm:text-sm">
                  {request.name}
                </span>
                <span className="text-gray-400 text-xs sm:text-sm">
                  {request.count} requests
                </span>
              </div>
              <div className="w-full bg-[#1a2038] rounded-full h-2">
                <div
                  className={`${request.color} h-2 rounded-full transition-all duration-500`}
                  style={{ width: `${request.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
