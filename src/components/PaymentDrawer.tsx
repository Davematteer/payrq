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


import { Button } from "./ui/button";
import { CheckCheck, ShoppingCart } from "lucide-react";



export function PaymentDrawer({isOpen, setOpen}:{isOpen:boolean, setOpen: (v:boolean) => void}){
    
    return (
        <>
        <Drawer open={isOpen} onOpenChange={setOpen} >
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="flex justify-center items-center gap-2 text-2xl font-extralight"><ShoppingCart /> </DrawerTitle>
                    <DrawerDescription>Confirm Payment!</DrawerDescription>
                </DrawerHeader>
            <DrawerFooter>
                <Button className="flex justify-center items-center gap-2 ">Check Out <CheckCheck /></Button>
                <DrawerClose asChild>
                <Button>Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}