import { Metadata } from "next";
import FetchProduct from "./FetchProduct";

export const metadata: Metadata = {
    title: "E-commerce",
    description: "Product Page | E-commerce",
};

export default function ProductPage() {
  return (
    <>
        <p className="h-screen grid place-content-center">This is Product Page</p>
        <main className="w-screen grid grid-cols-4 bg-red-900">
            <FetchProduct />
        </main>
        
    </>
    
  )
}
