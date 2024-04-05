import { Metadata } from "next";
import Image from "next/image";
import FetchProduct from "../../components/cardproduct/FetchProduct";
import ProductPage from "../../components/cardproduct/FetchProduct";


export const metadata: Metadata = {
  title: "E-commerce",
  description: "Home Page | E-commerce",
}

export default function HomePage() {
  return (
    <>
      <div>
          <p className="h-screen grid place-content-center">This is Home Page</p>
      </div>
    </>
  );
}
