"use client"
import { CheckCheck } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PaystackInline from "@paystack/inline-js";

export function PaymentPopUp({
  email,
  amount,
}: {
  email: string | undefined;
  amount: number;
}) {
    const [Paystack, setPaystack] = useState<typeof PaystackInline | null>(null);
  const [accessCode, setAccessCode] = useState("");
  const router = useRouter();
  amount *= 100


  // Load Paystack only in the browser
  useEffect(() => {
    (async () => {
      const mod = await import("@paystack/inline-js");
      setPaystack(() => mod.default);
    })();
  }, []);


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

      if (!Paystack || !accessCode) {
        console.error("Paystack not ready or no access code");
        return;
      }
    const popup = new Paystack();
    popup.resumeTransaction(accessCode);
  };

  return (
    <Button
    onClick={handleCheckout}
 // disable until ready
    className="flex justify-center items-center gap-2"
  >
    Check Out <CheckCheck />
  </Button>
  
  );
}
