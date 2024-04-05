// import { toNamespacedPath } from "path/win32"
// export default function page() {
//   return (
//     <p className="h-screen grid place-content-center">page</p>
//   )
// }

import CardProductDetail from "@/components/cardproduct/CardProductDetail";
import { Metadata, ResolvingMetadata } from "next";


type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

type PropsParams = {
	params: {
		id: number;
	};
	searchParams: any;

};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const id = params.id;
	
	const product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json());

	return {
		title: product.title,
		description: product.description,
		openGraph: {
			images: product.image,
		},
	};
}

const ENDPOINT = "https://fakestoreapi.com/products/";

export const getData = async (id: number) => {
	const res = await fetch(`${ENDPOINT}${id}`);
	const data = await res.json();
	console.log(data);
	return data;
};

export default async function Detail(props: PropsParams) {
	let data = await getData(props.params.id);

	return (
		<div className="h-screen grid place-content-center">
			<CardProductDetail
				title={data?.title || "NoTitle"}
				description={data?.description || "No Description"}
				image={
					data?.image ||
					"https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1"
				}
                price={data?.price || "Free"}
			/>
		</div>
	);
}

