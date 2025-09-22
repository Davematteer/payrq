"use client"
import { ScanQrCode } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { DrawerUser } from "@/components/DrawerUser";
import { DrawerHistory } from "@/components/DrawerHistory";

export default function Home() {
  const [userOpen, setUserOpen] = useState(false);
  const [scanOpen, setScanOpen] = useState(false);
  const [historyOpen, setHistoryOpen] = useState(false);
  
  
  return (
    <main className="min-h-screen ">
      <footer className="fixed bottom-0  w-full">
      <div className="flex flex-row justify-between md:justify-center md:gap-60 p-5 ">
        <DrawerUser />       
        <ScanQrCode/>  
        <DrawerHistory />
      </div>
      </footer>
    </main>
  );
}
