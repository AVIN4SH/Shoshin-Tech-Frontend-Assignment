"use client";

import { Bell, MessageSquare, ChevronDown, SearchIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-1 md:px-6">
        <div className="flex flex-1 items-center space-x-4 max-md:ml-6">
          <Input
            type="search"
            placeholder="Search..."
            id="search"
            className="max-sm:ml-6 w-[200px] md:w-[300px] lg:w-[400px] max-sm:hidden"
          />
          <label htmlFor="search">
            <SearchIcon className="w-5 h-5 cursor-pointer" />
          </label>
        </div>
        <div className="flex items-center space-x-1 md:space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/avatars/01.png" alt="Admira John" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline-block font-medium">
                  Admirra John
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Admirra John
                  </p>
                  <p className="text-xs leading-none text-muted-foreground">
                    admirra@vasitum.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

// "use client";

// import { Bell, MessageSquare, ChevronDown, Search, Menu } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Sheet, SheetTrigger } from "@/components/ui/sheet";
// import { Sidebar } from "./sidebar";

// export function Header() {
//   return (
//     <header className="sticky top-0 z-40 border-b bg-white">
//       <div className="flex h-16 items-center justify-between px-4">
//         <div className="flex items-center space-x-4">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="ghost" size="icon" className="lg:hidden">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </SheetTrigger>
//             <Sidebar />
//           </Sheet>
//           <div className="relative">
//             <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               type="search"
//               placeholder="Search..."
//               className="pl-8 w-[200px] md:w-[300px] lg:w-[400px]"
//             />
//           </div>
//         </div>
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <Button variant="ghost" size="icon" className="text-gray-700">
//             <Bell className="h-5 w-5" />
//           </Button>
//           <Button variant="ghost" size="icon" className="text-gray-700">
//             <MessageSquare className="h-5 w-5" />
//           </Button>
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="flex items-center space-x-2">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src="/avatars/01.png" alt="Admira John" />
//                   <AvatarFallback>AJ</AvatarFallback>
//                 </Avatar>
//                 <span className="hidden md:inline-block font-medium">
//                   Admira John
//                 </span>
//                 <ChevronDown className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent className="w-56" align="end" forceMount>
//               <DropdownMenuLabel className="font-normal">
//                 <div className="flex flex-col space-y-1">
//                   <p className="text-sm font-medium leading-none">
//                     Admira John
//                   </p>
//                   <p className="text-xs leading-none text-muted-foreground">
//                     admira@vasilum.com
//                   </p>
//                 </div>
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Profile</DropdownMenuItem>
//               <DropdownMenuItem>Settings</DropdownMenuItem>
//               <DropdownMenuItem>Sign out</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//       </div>
//     </header>
//   );
// }
