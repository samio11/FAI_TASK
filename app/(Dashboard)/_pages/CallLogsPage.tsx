import { useState } from "react";
import { Search, Phone, Clock, PlayCircle, FileText } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CallLog {
  id: string;
  phone: string;
  date: string;
  duration: string;
  status: string;
  statusType: "success" | "warning" | "error" | "info";
  description: string;
  category: string;
}

const callLogs: CallLog[] = [
  {
    id: "1",
    phone: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusType: "success",
    description: "Quote Provided",
    category: "Screen",
  },
  {
    id: "2",
    phone: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    duration: "5:23",
    status: "Warm Transfer",
    statusType: "warning",
    description: "Escalated to technician",
    category: "Software",
  },
  {
    id: "3",
    phone: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    duration: "5:23",
    status: "Appointment",
    statusType: "info",
    description: "Appointment Booked",
    category: "Battery",
  },
  {
    id: "4",
    phone: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    duration: "0:20",
    status: "Hang up",
    statusType: "error",
    description: "Call Dropped",
    category: "Unknown",
  },
  {
    id: "5",
    phone: "+1 (555) 345-6789",
    date: "2025-12-16 • 09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusType: "success",
    description: "Quote Provided",
    category: "Screen",
  },
];

const statusColors = {
  success: "bg-green-500/20 text-green-400 border-green-500/30",
  warning: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  error: "bg-red-500/20 text-red-400 border-red-500/30",
  info: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export function CallLogsPage() {
  const [selectedCall, setSelectedCall] = useState(callLogs[0]);

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="bg-[#0f1535] border-b border-[#1a2038] px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-white text-base sm:text-xl font-semibold">
          Call Logs & History
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 h-full">
          {/* Left Panel - Call List */}
          <Card className="bg-[#0f1535] border-cyan-500 border-2 flex flex-col overflow-hidden">
            <CardContent className="p-4 sm:p-6 flex flex-col h-full">
              {/* Search and Filters */}
              <div className="space-y-3 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search by phone number, issue type..."
                    className="pl-10 bg-[#1a2038] border-[#2a3150] text-white placeholder:text-gray-500"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <Select defaultValue="all-type">
                    <SelectTrigger className="bg-[#1a2038] border-[#2a3150] text-white text-xs sm:text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a2038] border-[#2a3150]">
                      <SelectItem value="all-type">All Type</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                      <SelectItem value="transfer">Transfer</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all-issues">
                    <SelectTrigger className="bg-[#1a2038] border-[#2a3150] text-white text-xs sm:text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a2038] border-[#2a3150]">
                      <SelectItem value="all-issues">All Issues</SelectItem>
                      <SelectItem value="screen">Screen</SelectItem>
                      <SelectItem value="battery">Battery</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="today">
                    <SelectTrigger className="bg-[#1a2038] border-[#2a3150] text-white text-xs sm:text-sm">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a2038] border-[#2a3150]">
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="week">This Week</SelectItem>
                      <SelectItem value="month">This Month</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Call List Header */}
              <h2 className="text-white font-semibold mb-3 text-sm sm:text-base">
                Call List
              </h2>

              {/* Call List Items */}
              <div className="flex-1 overflow-y-auto space-y-2 pr-2">
                {callLogs.map((call) => (
                  <button
                    key={call.id}
                    onClick={() => setSelectedCall(call)}
                    className={`w-full text-left p-3 sm:p-4 rounded-lg border transition-all ${
                      selectedCall.id === call.id
                        ? "bg-[#1a2038] border-cyan-500"
                        : "bg-[#0a0e27] border-[#1a2038] hover:border-[#2a3150]"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5 text-cyan-400" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <span className="text-white font-medium text-sm sm:text-base">
                            {call.phone}
                          </span>
                          <Badge
                            className={`${statusColors[call.statusType]} text-xs shrink-0`}
                          >
                            {call.status}
                          </Badge>
                        </div>
                        <p className="text-gray-400 text-xs mb-2">
                          {call.date}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {call.duration}
                          </span>
                          <span>{call.description}</span>
                          <Badge
                            variant="outline"
                            className="text-xs border-[#2a3150] text-gray-400"
                          >
                            {call.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Right Panel - Call Details */}
          <Card className="bg-[#0f1535] border-[#1a2038] flex flex-col overflow-hidden">
            <CardContent className="p-4 sm:p-6 flex flex-col h-full">
              <h2 className="text-white font-semibold mb-4 text-sm sm:text-base">
                Call Details
              </h2>

              {/* Call Info Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Phone Number</p>
                  <p className="text-white text-sm sm:text-base">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Duration</p>
                  <p className="text-white text-sm sm:text-base">4:32</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Date & Time</p>
                  <p className="text-white text-sm sm:text-base">
                    2025-12-16 10:45 AM
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Issue Type</p>
                  <p className="text-white text-sm sm:text-base">Screen</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Call Type</p>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                    AI Resolved
                  </Badge>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Outcome</p>
                  <p className="text-white text-sm sm:text-base">
                    Quote provided
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 mb-6">
                <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white">
                  <PlayCircle className="w-4 h-4" />
                  Play Audio Recording
                </Button>

                <Button
                  variant="outline"
                  className="w-full bg-transparent border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10"
                >
                  <FileText className="w-4 h-4" />
                  Conversation Transcript
                </Button>
              </div>

              {/* Conversation */}
              <div className="flex-1 overflow-y-auto bg-[#0a0e27] rounded-lg p-4 space-y-4">
                <div>
                  <p className="text-green-400 text-xs font-semibold mb-1">
                    AI Assistant:
                  </p>
                  <p className="text-gray-300 text-sm">
                    Thank you for calling UltraabdFix! How can I help you today?
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 text-xs font-semibold mb-1">
                    Customer:
                  </p>
                  <p className="text-gray-300 text-sm">
                    Hi, my iPhone 13 screen is cracked. How much would it cost
                    to repair?
                  </p>
                </div>

                <div>
                  <p className="text-green-400 text-xs font-semibold mb-1">
                    AI Assistant:
                  </p>
                  <p className="text-gray-300 text-sm">
                    I can help you with that! For an iPhone 13 screen repair,
                    our price is $199. This includes parts, labor, and comes
                    with a 90 day warranty. Would you like to book an
                    appointment?
                  </p>
                </div>

                <div>
                  <p className="text-cyan-400 text-xs font-semibold mb-1">
                    Customer:
                  </p>
                  <p className="text-gray-300 text-sm">
                    Yes, please! When are you available?
                  </p>
                </div>

                <div>
                  <p className="text-green-400 text-xs font-semibold mb-1">
                    AI Assistant:
                  </p>
                  <p className="text-gray-300 text-sm">
                    Great! I have availability today at 2:00 PM or tomorrow at
                    10:00 AM. Which works better for you?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
