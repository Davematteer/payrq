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
import { ArrowBigDownDash, CheckCheck, ShoppingCart } from "lucide-react";
import { PaymentPopUp } from "./PaymentPopup";
import { UserSession } from "@/lib/authMethods";



export function PaymentDrawer({isOpen, setOpen, total}:{isOpen:boolean, setOpen: (v:boolean) => void, total:number}){
    const user = UserSession();

    return (
        <>
        <Drawer open={isOpen} onOpenChange={setOpen} >
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="flex justify-center items-center gap-2 text-2xl font-extralight"><ShoppingCart /> </DrawerTitle>
                    <DrawerDescription>Confirm Payment!</DrawerDescription>
                    <DrawerDescription>Total: GHc{total}</DrawerDescription>

                </DrawerHeader>
            <DrawerFooter>
                <DrawerClose asChild>
                <PaymentPopUp amount={total} email={user?.user.email ?? undefined}/>
                </DrawerClose>
                <DrawerClose asChild>
                <Button className="flex justify-center items-center gap-2">Cancel <ArrowBigDownDash /></Button>
                </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
    )
}