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

  return (
    <>
    <div className="flex justify-center items-center p-6 m-2">
      <video ref={ref} className="rounded-3xl"/> 
    </div>
    <p>
      {result}
    </p>
    {JSON.parse(result).metaData  && <PaymentDrawer isOpen={isOpen} setOpen={setOpen}/>}
    </>
  );
};