"use client"
import { CheckCheck } from "lucide-react";
import { Button } from "./ui/button";
import Paystack from "@paystack/inline-js";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function PaymentPopUp({
  email,
  amount,
}: {
  email: string | undefined;
  amount: number;
}) {
  const popup = new Paystack();
  const [accessCode, setAccessCode] = useState("");
  const router = useRouter();
  amount *= 100

  useEffect(() => {
    if (!email) return 

    const payment = async () => {
      try {
        const res = await fetch("/api/payment/initialize", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, amount }), // pass details to backend
        });

        const data = await res.json();
        setAccessCode(data.data.access_code); // store access_code
      } catch (error) {
        if (error instanceof Error) console.error("Init error:", error.message);
      }
    };
    
    payment();
    console.log(accessCode)
  }, [email, amount]);

  const handleCheckout = () => {
    if (!email){
        router.push("/auth/login")
      }    

    if (!accessCode) {
      console.error("No access code yet");
      return;
    }

    popup.resumeTransaction(accessCode);
  };

  return (
    <Button
    onClick={handleCheckout}
    disabled={!accessCode} // disable until ready
    className="flex justify-center items-center gap-2"
  >
    {accessCode ? "Check Out" : "Loading..."} <CheckCheck />
  </Button>
  
  );
}
