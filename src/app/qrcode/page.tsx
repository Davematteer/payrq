"use client"
import { QRCode } from 'react-qrcode-logo';

export default function QrPage(){
    const items = {
        metaData: "Details about business",
        items:[
            { name: "Apple", price: 2 },
        { name: "Banana", price: 1 },
        { name: "Orange", price: 3 }
        ]
    }
        
      
      
    return (
        <main className='min-h-screen flex justify-center items-center'>
        <QRCode value={JSON.stringify(items)} size={300}/>
        </main>
    )
}