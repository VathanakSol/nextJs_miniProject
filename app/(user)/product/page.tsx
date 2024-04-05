import FetchProduct from "@/components/cardproduct/FetchProduct"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product",
    description: "Prodcut Page | E-commerce",
}

export default function Product() {
  return (
    <>
        <FetchProduct />
    </>
  );
}
