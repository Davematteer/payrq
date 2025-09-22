import { useState } from "react";
import { useZxing } from "react-zxing";

export const QRScanner = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <>
    <div className="flex justify-center items-center p-6 m-2">
      <video ref={ref} className="rounded-3xl"/> 
    </div>
    </>
  );
};