"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { scheduleData } from "@/lib/data";

export function UpcomingSchedule() {
  const schedules = scheduleData;

  return (
    <Card>
      <CardHeader className="space-y-0">
        <CardTitle>Upcoming Schedule</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {schedules.map((schedule, index) => (
          <div
            key={index}
            className={`
              flex items-start justify-between space-x-4 border-b last:border-0 pb-4 last:pb-0 
              ${index >= 2 ? "hidden xl:flex" : "flex"}
            `}
          >
            <div className="space-y-1">
              <p className="text-sm font-medium">{schedule.title}</p>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted-foreground">
                  {schedule.time}
                </span>
                <span className="text-xs font-medium">{schedule.priority}</span>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        ))}
      </CardContent>
      <CardFooter className="border-t w-[95%] border-t-gray-400 mx-auto">
        <Button
          variant="ghost"
          size="default"
          onClick={() => console.log("See all announcements clicked")}
          className="text-center mx-auto text-red-500 mt-2"
        >
          Create a New Schedule
        </Button>
      </CardFooter>
    </Card>
  );
}
