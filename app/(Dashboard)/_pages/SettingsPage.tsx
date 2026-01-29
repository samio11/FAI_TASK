import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import userAvatar from "@/public/user.png";
import Image from "next/image";

export function SettingsPage() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Page Header */}
      <div className="bg-[#0f1535] border-b border-[#1a2038] px-4 sm:px-6 lg:px-8 py-4">
        <h1 className="text-white text-base sm:text-xl font-semibold">
          Settings
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        <Tabs defaultValue="profile" className="w-full max-w-3xl">
          <TabsList className="bg-[#0f1535] border-b border-[#1a2038] w-full justify-start rounded-none p-0 h-auto">
            <TabsTrigger
              value="profile"
              className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 rounded-none px-6 py-3 text-gray-400 hover:text-white text-sm sm:text-base"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger
              value="password"
              className="data-[state=active]:bg-transparent data-[state=active]:text-white data-[state=active]:border-b-2 data-[state=active]:border-cyan-500 rounded-none px-6 py-3 text-gray-400 hover:text-white text-sm sm:text-base"
            >
              Password Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="mt-6">
            <Card className="bg-[#0f1535] border-[#1a2038]">
              <CardContent className="p-4 sm:p-6 space-y-6">
                {/* Profile Image */}
                <div>
                  <label className="text-white text-sm mb-3 block">
                    Profile Image
                  </label>
                  <div className="flex items-center gap-4">
                    <Image
                      src={userAvatar}
                      alt="User"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <Button
                      size="sm"
                      className="bg-[#1a2038] hover:bg-[#242d4a] text-white border border-[#2a3150] text-xs sm:text-sm"
                    >
                      Edit Profile
                    </Button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Full Name:
                  </label>
                  <div className="bg-[#1a2038] rounded-lg px-4 py-3 text-white text-sm sm:text-base">
                    Jane D.
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Email:
                  </label>
                  <div className="bg-[#1a2038] rounded-lg px-4 py-3 text-white text-sm sm:text-base break-all">
                    jane@gmail.com
                  </div>
                </div>

                {/* Store Name */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Store Name:
                  </label>
                  <div className="bg-[#1a2038] rounded-lg px-4 py-3 text-white text-sm sm:text-base">
                    Ubreakifix Store
                  </div>
                </div>

                {/* Store Address */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Store Address:
                  </label>
                  <div className="bg-[#1a2038] rounded-lg px-4 py-3 text-white text-sm sm:text-base">
                    123 Main Street, New York, NY 10001
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="password" className="mt-6">
            <Card className="bg-[#0f1535] border-[#1a2038]">
              <CardContent className="p-4 sm:p-6 space-y-6">
                {/* Current Password */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter current password"
                    className="bg-[#1a2038] border-[#2a3150] text-white placeholder:text-gray-500"
                  />
                </div>

                {/* New Password */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    New Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Enter new password"
                    className="bg-[#1a2038] border-[#2a3150] text-white placeholder:text-gray-500"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="text-white text-sm mb-2 block">
                    Confirm New Password
                  </label>
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    className="bg-[#1a2038] border-[#2a3150] text-white placeholder:text-gray-500"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1 sm:flex-none">
                    Update Password
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-transparent border-[#2a3150] text-white hover:bg-[#1a2038] flex-1 sm:flex-none"
                  >
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
