"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Pin } from "lucide-react";
import { cn } from "@/lib/utils";
import { announcementsData } from "@/lib/data";

interface AnnouncementsProps {
  className?: string;
}

export function Announcements({ className }: AnnouncementsProps) {
  const announcements = announcementsData;

  return (
    <Card className={cn("", className)}>
      <CardHeader className="space-y-0">
        <CardTitle>Announcement</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex items-start justify-between space-x-4 border-b last:border-0 pb-4 last:pb-0"
            >
              <div className="space-y-1">
                <p className="text-sm font-medium">{announcement.title}</p>
                <p className="text-xs text-muted-foreground">
                  {announcement.time}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    console.log(`Pin clicked for: ${announcement.title}`)
                  }
                >
                  <Pin className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() =>
                    console.log(
                      `More options clicked for: ${announcement.title}`
                    )
                  }
                >
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t w-[95%] border-t-gray-400 mx-auto">
        <Button
          variant="ghost"
          size="default"
          onClick={() => console.log("See all announcements clicked")}
          className="text-center mx-auto text-red-500 mt-2"
        >
          See All Announcements
        </Button>
      </CardFooter>
    </Card>
  );
}
