"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { authClient } from "@/lib/auth-client" // import the auth client
import { User2 } from "lucide-react"

export function User(){

    const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
        
    } = authClient.useSession() 

    return (
        <Avatar >
          <AvatarImage src={session?.user.image ?? undefined}  />
          <AvatarFallback><User2 /></AvatarFallback>
        </Avatar> 
    )
}