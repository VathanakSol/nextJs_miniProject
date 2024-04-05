import { Card } from "flowbite-react";

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
                <img src={image}
                     className="h-[100vh] object-cover overflow-hidden"
                />
            )}
        >
        </Card>
    </>
  )
}
