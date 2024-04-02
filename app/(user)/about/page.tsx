import ProductList from "@/components/productcard/ProductList";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "E-commerce",
    description: "About Page | E-commerce",
};

export default function AboutPage() {
  return (
    <>
        <p className="h-screen grid place-content-center">This is About Page</p>
    </>
  )
}
