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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { History } from "lucide-react"
import { ShoppingCart } from 'lucide-react';

export function DrawerHistory(){
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
        <ShoppingCart onClick={() => setOpen(true)} />

        <Drawer open={isOpen} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle><p className="font-light text-2xl">Receipt History</p></DrawerTitle>
                    <DrawerDescription>Here's your past transaction receipts.</DrawerDescription>
                </DrawerHeader>
            <DrawerFooter>
                <Button>View All Receipts</Button>
                <DrawerClose asChild>
                <Button>Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}