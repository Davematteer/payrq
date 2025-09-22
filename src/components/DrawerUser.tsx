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
  

export function DrawerUser(){
    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
        <Avatar onClick={() => setOpen(true)}>
          <AvatarImage src="https://github.com/shadcn.png"  />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> 

        <Drawer open={isOpen} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            <DrawerFooter>
            <div className="flex flex-col w-100">
            <Button>Test</Button>
            <Button>Log in</Button>
                <Button>Log Out</Button>
                <DrawerClose asChild>
                <Button>Cancel</Button>
                </DrawerClose>
            </div>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}