"use client";

import React, { useState, useEffect } from 'react';

// Define a type for the post object
interface Post {
  price: number;
  description: string;
  image: string | undefined;
  id: number;
  title: string;
}

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data: Post[] = await response.json(); 
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };
    

    fetchPosts();
  }, []);

  if (loading) {
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mr-3"></div>
            <div className="text-2xl">Loading...</div>
        </div>
    );
  }
  
  return (
    <div className="container mx-auto px-8 py-4">
      <h1 className="text-center text-2xl font-bold mt-4 mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {posts.map(post => (
          <div key={post.id} className="bg-gray-100 rounded p-4">
            <img src={post.image} alt={post.title} className="mx-auto w-48 h-48 object-cover" />
            <h2 className="text-center text-lg text-black font-semibold mt-2">{post.title}</h2>
            {/* <p className="text-gray-600">{post.description}</p> */}
            <p className="text-blue-500 text-center font-semibold mt-2">${post.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;