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
import { ArrowBigDownDash, LogIn, LogOut, User } from "lucide-react";
import { SignOut, UserSession } from "@/lib/authMethods";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function DrawerUser() {
  const [isOpen, setOpen] = useState(false);
  const user = UserSession();
  const router = useRouter();

  return (
    <>
      <Avatar onClick={() => setOpen(true)}>
        <AvatarImage src={user?.user.image ?? undefined} />
        <AvatarFallback><User /></AvatarFallback>
      </Avatar>

      <Drawer open={isOpen} onOpenChange={setOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="flex justify-center items-center gap-2 text-2xl font-light"><span > {user?.user.name ? (
  <Avatar onClick={() => setOpen(true)}>
    <AvatarImage src={user?.user.image ?? undefined} />
  </Avatar>
) : ""}</span>Welcome{` ${user?.user.name ? user.user.name : ""}`} </DrawerTitle>
          

            <DrawerDescription>{user ? `Here's your account ${user.user.name}`: "Login to see account details"}</DrawerDescription>
          </DrawerHeader>

          {/* mobile */}
          {!user ? (
            <DrawerFooter className="md:hidden">
              <Link  href="/auth/login">
                <Button className="w-full flex justify-center items-center gap-2">Log in <LogIn /></Button>
              </Link>
              <Link href="/auth/signup">
                <Button className="w-full">Sign Up</Button>
              </Link>
              <DrawerClose asChild>
              <Button className="flex justify-center items-center gap-2 w-full">Cancel <ArrowBigDownDash /></Button>
              </DrawerClose>
            </DrawerFooter>
          ) : (
            <DrawerFooter className="md:hidden">
              <Button className="w-full flex justify-center items-center gap-2" onClick={() => {SignOut(router)
                setOpen(false)
              }}>Log Out <LogOut /></Button>
              <DrawerClose asChild>
              <Button className="flex justify-center items-center gap-2 w-full">Cancel <ArrowBigDownDash /></Button>

              </DrawerClose>
            </DrawerFooter>
          )}

          {/* desktop */}
          <DrawerFooter className="hidden md:flex justify-center items-center flex-col w-full">
            {!user ? (
              <>
                <Button>Log in</Button>
                <Button>Sign Up</Button>
              </>
            ) : (
              <Button onClick={() => {
                SignOut(router);
                setOpen(false)
              }}>Log Out</Button>
            )}
            <DrawerClose asChild>
              <Button>Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
