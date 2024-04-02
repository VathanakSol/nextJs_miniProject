import { Metadata } from "next";
import Image from "next/image";
import FetchProduct from "./product/FetchProduct";
import ProductPage from "./product/page";


export const metadata: Metadata = {
  title: "E-commerce",
  description: "Home Page | E-commerce",
}

export default function HomePage() {
  return (
    <>
      <div>
          <FetchProduct />
      </div>
    </>
  );
}
