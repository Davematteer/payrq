import { ScanQrCode } from "lucide-react";
import { History } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Home() {
  return (
    <main className="min-h-screen ">
      <footer className="fixed bottom-0  w-full">
      <div className="flex flex-row justify-between md:justify-center md:gap-60 p-5 ">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png"  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>        
        <ScanQrCode/>  
        <History />
      </div>
      </footer>
    </main>
  );
}
