

// export default function CardProductDetail() {
//   return (
//     <div>CardProductDetail</div>
//   )
// }



import { Card } from "flowbite-react";

type PropsType = {
	title: string;
	image: string;
	description: string;
    price: number;
};

export default function CardProductDetail({
	title,
	image,
	description,
    price,
}: PropsType) {
	return (
		<Card className="bg-blue-900  w-[80vw] rounded-25 grid place-content-center">
			<div className="flex justify-center h-[50vh] items-center p-10">
                <img src={image} alt={description} width="200px" height="250px"/>
                <div className="flex flex-col p-10">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                        {title}
                    </h5>
                    <hr /><br />
                    <p className="font-normal text-gray-300 mb-4">
                        {description}
                    </p>
                    <p className="text-xl font-normal text-gray-500 dark:text-gray-300 bg-blue-500 w-20 flex justify-center">
                        ${price}
                    </p>
                </div>
            </div>
		</Card>
	);

}
