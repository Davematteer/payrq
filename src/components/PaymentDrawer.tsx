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



export function PaymentDrawer({isOpen, setOpen}:{isOpen:boolean, setOpen: (v:boolean) => void}){
    
    return (
        <>
        <Drawer open={isOpen} onOpenChange={setOpen} >
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                <Button>Cancel</Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}