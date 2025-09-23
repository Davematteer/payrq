"use client"
import { ScanQrCode } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react";
import { DrawerUser } from "@/components/DrawerUser";
import { DrawerHistory } from "@/components/DrawerHistory";
import { QRScanner } from "@/components/QRScanner";
import { LandingPage } from "@/components/LandingPage";
import Hero from "@/components/Hero";

export default function Home() {
  const [scannerOpen, setScannerOpen] = useState(false);

  
  return (
    <main className="min-h-screen ">
      {scannerOpen ? <QRScanner/> : <LandingPage />}
      <footer className="fixed bottom-0  w-full bg-white">
      <div className="flex flex-row justify-between md:justify-center md:gap-60 p-4 mx-4 ">
        <DrawerUser />       
        <ScanQrCode onClick={() => setScannerOpen(prevState => !prevState)}/>  
        <DrawerHistory />
      </div>
      </footer>
    </main>
  );
}
