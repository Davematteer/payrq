import { useState } from "react";
import { useZxing } from "react-zxing";
import { PaymentDrawer } from "./PaymentDrawer";

interface encode{
  metaData: string,
  item: {name:string, price:number}[];
}

export const QRScanner = () => {
  const [result, setResult] = useState("");
  const [isOpen, setOpen] = useState(false);

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      setOpen(true)
    },
  });
  let data = {};
  if (result !== "") {
    try {
      data = JSON.parse(result);
    } catch (e) {
      console.error("Invalid JSON from QR code:", e);
    }
  }

  return (
    <>
    <div className="flex justify-center items-center p-6 m-2">
      <video ref={ref} className="rounded-3xl"/> 
    </div>
    <p>
      {result}
      
    </p>
    {(data as encode).metaData && <PaymentDrawer isOpen={isOpen} setOpen={setOpen}/>}
    </>
  );
};