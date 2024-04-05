// import { Metadata } from "next"

// export const metadata: Metadata = {
//     title: "E-commerce",
//     description: "About Page | E-commerce",
// };

// export default function AboutPage() {
//   return (
//     <>
//         <p className="h-screen grid place-content-center">This is About Page</p>
//     </>
//   )
// }


import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';

export const metadata: Metadata = {
  title: "E-commerce",
  description: "About Page | E-commerce",
}

export default function AboutUs() {
  return (
      <>
        <div className="grid place-content-center text-center w-[100vw] p-8">
          <p className="text-4xl p-12 font-bold text-gray-200">&#10077; Fast, Saving and Quality &#10078;</p>
          <img src="about01.jpg" alt="seller with customer are shaking hand"/>
        </div><br />
        <hr />
        <div className="grid grid-cols-2 place-content-center text-center w-[100vw] p-16">
          <img src="about01.jpg" alt="seller with customer are shaking hand"/>
          <div className="pl-12 py-4 text-center">
            <p className="text-4xl p-12 font-bold text-gray-200">&#10077; Fast Delivery &#10078;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repellat consequuntur ipsam dolor necessitatibus porro, nemo deserunt soluta, totam architecto temporibus assumenda, eligendi cupiditate illo veniam rerum autem beatae quod.</p>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-2 place-content-center text-center w-[100vw] p-16">
          <div className="pr-12 py-4 text-center">
            <p className="text-4xl p-12 font-bold text-gray-200">&#10077; <span claaName>High Saving and Best Quality</span> &#10078;</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit repellat consequuntur ipsam dolor necessitatibus porro, nemo deserunt soluta, totam architecto temporibus assumenda, eligendi cupiditate illo veniam rerum autem beatae quod.</p>
          </div>
          <img src="about01.jpg" alt="seller with customer are shaking hand"/>
        </div>
        
      </>
  );
}   