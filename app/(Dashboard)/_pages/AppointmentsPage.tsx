import {
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Appointment {
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  device: string;
  repairType: string;
  date: string;
  slot: number;
  startTime: string;
}

const appointments: Appointment[] = [
  {
    clientName: "Jane D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: "09:00",
  },
  {
    clientName: "Jane D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: "10:00",
  },
  {
    clientName: "Jane D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: "11:00",
  },
  {
    clientName: "Jane D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: "12:00",
  },
  {
    clientName: "Jane D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: "02:00",
  },
  {
    clientName: "Jane D",
    clientPhone: "01960685765",
    clientEmail: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repairType: "Screen",
    date: "02/06/2026",
    slot: 1,
    startTime: "03:00",
  },
];

export function AppointmentsPage() {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("https://techstore.com/book?id=store123");
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="bg-[#0f1535] border-b border-[#1a2038] px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-white text-base sm:text-xl font-semibold">
          Appointments
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6 overflow-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-[#0f1535] border-[#1a2038]">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-gray-400 text-xs sm:text-sm">
                  Total Booked
                </span>
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-white text-2xl sm:text-3xl font-semibold">
                  34
                </span>
                <span className="text-green-400 text-xs sm:text-sm mb-1">
                  +8 this week
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0f1535] border-[#1a2038]">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-gray-400 text-xs sm:text-sm">
                  AI Booked
                </span>
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-white text-2xl sm:text-3xl font-semibold">
                  28
                </span>
                <span className="text-gray-400 text-xs sm:text-sm mb-1">
                  82% of total
                </span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#0f1535] border-[#1a2038]">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between mb-3">
                <span className="text-gray-400 text-xs sm:text-sm">
                  Pending
                </span>
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-white text-2xl sm:text-3xl font-semibold">
                  3
                </span>
                <span className="text-gray-400 text-xs sm:text-sm mb-1">
                  Awaiting confirmation
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Booking Link */}
        <Card className="bg-[#0f1535] border-[#1a2038]">
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-white font-semibold mb-3 text-sm sm:text-base">
              Booking Link
            </h2>
            <div className="flex gap-2">
              <Input
                value="https://techstore.com/book?id=store123"
                readOnly
                className="bg-[#1a2038] border-[#2a3150] text-white text-sm"
              />
              <Button
                onClick={copyToClipboard}
                className="bg-[#1a2038] hover:bg-[#242d4a] border border-[#2a3150] text-white shrink-0"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copy Link
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Appointments Table */}
        <Card className="bg-[#0f1535] border-cyan-500 border-2">
          <CardContent className="p-4 sm:p-6">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-[#1a2038] hover:bg-transparent">
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Client Name
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Client Phone
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Client email
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Device
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Repair Type
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Date
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Slot no
                    </TableHead>
                    <TableHead className="text-gray-400 text-xs sm:text-sm">
                      Start Time
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {appointments.map((appointment, index) => (
                    <TableRow
                      key={index}
                      className="border-[#1a2038] hover:bg-[#1a2038]/50"
                    >
                      <TableCell className="text-cyan-400 text-xs sm:text-sm">
                        {appointment.clientName}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {appointment.clientPhone}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {appointment.clientEmail}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {appointment.device}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {appointment.repairType}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {appointment.date}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm text-center">
                        {appointment.slot}
                      </TableCell>
                      <TableCell className="text-white text-xs sm:text-sm">
                        {appointment.startTime}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-[#1a2038]"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Button>

              <div className="flex gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-[#1a2038] w-8 h-8"
                >
                  1
                </Button>
                <Button
                  size="sm"
                  className="bg-blue-500 hover:bg-blue-600 text-white w-8 h-8"
                >
                  2
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-[#1a2038] w-8 h-8"
                >
                  3
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-[#1a2038] w-8 h-8"
                >
                  4
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-[#1a2038] w-8 h-8"
                >
                  5
                </Button>
                <span className="text-gray-400 px-2 flex items-center">
                  ...
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white hover:bg-[#1a2038] w-8 h-8"
                >
                  11
                </Button>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white hover:bg-[#1a2038]"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
