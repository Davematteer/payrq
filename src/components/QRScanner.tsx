import { useState } from "react";
import { useZxing } from "react-zxing";
import { PaymentDrawer } from "./PaymentDrawer";

export const QRScanner = () => {
  const [result, setResult] = useState("");
  const [isOpen, setOpen] = useState(false);

  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
      setOpen(true)
    },
  });
  
  const data = result.trim()
  console.log(`This is the json: ${data}, and this is the type: ${typeof data}`)

  return (
    <>
    <div className="flex justify-center items-center p-6 m-2">
      <video ref={ref} className="rounded-3xl"/> 
    </div>
    <p>
      {result}
      
    </p>
    {result && <PaymentDrawer isOpen={isOpen} setOpen={setOpen}/>}
    </>
  );
};