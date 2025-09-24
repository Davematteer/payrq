"use client"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer"
import { useState } from "react";

import { Button } from "./ui/button";

import { ArrowBigDownDash, Receipt, ReceiptIcon, ShoppingCart } from 'lucide-react';

export function DrawerHistory(){
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
        <ShoppingCart onClick={() => setOpen(true)} />

        <Drawer open={isOpen} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle ><p className="font-light text-2xl">Receipt History</p></DrawerTitle>
                    <DrawerDescription>Here&apos;s your past transaction receipts.</DrawerDescription>
                </DrawerHeader>
            <DrawerFooter>
                <Button className="flex justify-center items-center gap-2">View All Receipts <Receipt /></Button>
                <DrawerClose asChild>
                <Button className="flex justify-center items-center gap-2">Cancel <ArrowBigDownDash /></Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}