/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  Calendar,
  UserCircle,
  Building2,
  HelpCircle,
  Settings,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Recruitment", href: "/recruitment", icon: Users },
  { name: "Schedule", href: "/schedule", icon: Calendar },
  { name: "Employee", href: "/employee", icon: UserCircle },
  { name: "Department", href: "/department", icon: Building2 },
];

const secondaryNavigation = [
  { name: "Support", href: "/support", icon: HelpCircle },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavContent = ({ isMobile = false }) => (
    <>
      <div className="flex h-16 items-center justify-center lg:justify-start px-4 lg:px-16 lg:py-12 border-b ">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <img src={"/images/logo.png"} className="h-8 w-8" alt="logo" />
          </div>
          <span className="hidden lg:inline-block font-bold text-xl">
            Vasitum
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="flex flex-col gap-1 px-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                pathname === item.href
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700 hover:bg-gray-100"
              )}
              onClick={() => isMobile && setIsMobileMenuOpen(false)}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span
                className={isMobile ? "inline-block" : "hidden lg:inline-block"}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
        <div className="mt-4 pt-4 border-t">
          <nav className="flex flex-col gap-1 px-2">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                )}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <span
                  className={
                    isMobile ? "inline-block" : "hidden lg:inline-block"
                  }
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="hidden md:flex h-full w-16 lg:w-64 flex-col fixed inset-y-0 z-50 bg-white border-r">
        <NavContent />
      </div>
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden fixed top-3 left-3 z-50"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 w-64">
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          <DialogDescription className="sr-only">
            Use the menu below to navigate through the application.
          </DialogDescription>
          <NavContent isMobile={true} />
        </SheetContent>
      </Sheet>
    </>
  );
}
