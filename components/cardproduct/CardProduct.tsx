import { Card } from "flowbite-react";
import Image from "next/image";

type PropsType = {
    title: string;
    image: string;
    price: number;
    onClick?: () => void;
};

export default function CardProduct({title, image, price, onClick}:PropsType) {
  return (
    <>
        <Card 
            onClick={onClick}
            className="cursor-pointer bg-yellow-500 w-screen"
            renderImage={()=>(
                <Image src={image}
              className="h-[100vh] object-cover overflow-hidden" alt={""}                />
            )}
        >
        </Card>
    </>
  )
}
