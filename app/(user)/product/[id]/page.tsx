// import { toNamespacedPath } from "path/win32"
// export default function page() {
//   return (
//     <p className="h-screen grid place-content-center">page</p>
//   )
// }

import CardProductDetail from "@/components/cardproduct/CardProductDetail";
import { Metadata, ResolvingMetadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${params.id}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    const product = await response.json();

    return {
      title: product.title,
      description: product.description,
      openGraph: {
        images: product.image ? [product.image] : [],
      },
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    // Return default metadata in case of error
    return {
      title: "Default Title",
      description: "Default Description",
      openGraph: {
        images: ["https://example.com/default-image.jpg"],
      },
    };
  }
}

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: number): Promise<any> => {
  try {
    const response = await fetch(`${ENDPOINT}${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product data");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    // Return null or default data in case of error
    return null;
  }
};

export default async function Detail({ params }: Props) {
  const fetchData = async () => {
    try {
      const data = await getData(Number(params.id));
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  };

  const data = await fetchData();

  return (
    <div className="h-screen grid place-content-center">
      <CardProductDetail
        title={data?.title || "No Title"}
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


