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
import { User } from "lucide-react";
import { SignOut, UserSession } from "@/lib/authMethods";
import Link from "next/link";
  

export function DrawerUser(){
    const [isOpen, setOpen] = useState(false);
    const user =  UserSession()

    return (
        <>
        <Avatar onClick={() => setOpen(true)}>
          <AvatarImage src={user.data?.user.image ?? undefined} />
          <AvatarFallback><User /></AvatarFallback>
        </Avatar> 

        <Drawer open={isOpen} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
            
            
            {!user && <>
                <DrawerFooter className="md:hidden">
                <Link href="/auth/login">
                <Button>Log in</Button>
            </Link>
            <Link href="/auth/signup">
                <Button>Sign Up</Button>
            </Link>
            </DrawerFooter>
            
            </>}
            <DrawerFooter className="md:hidden">
                <Button onClick={() => SignOut()}>Log Out</Button>
                <DrawerClose asChild>
                <Button>Cancel</Button>
                </DrawerClose>
           
            </DrawerFooter>
            <DrawerFooter className="hidden md:flex justify-center items-center flex-col w-full">             

            {
               <>
                <Button>Log in</Button>
                <Button>Sign Up</Button>
               </>
            }
                <DrawerClose asChild>
                <Button>Cancel</Button>
                </DrawerClose>
       
           
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}