"use client";

import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import Image from 'next/image';

interface Product {
    id: string;
    title: string;
    code: string;
    name: string;
    description: string;
    image: string;
    price: number;
    category: string;
    quantity: number;
    inventoryStatus: string;
    rating: number;
}

const ENDPOINT = "https://fakestoreapi.com/products";

export default function Dashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
      
    
    fetchProducts();

    }, []);
    
    const fetchProducts = async () => {
      try {
          const response = await fetch(`${ENDPOINT}`);
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setProducts(data);
          setLoading(false);
      } catch (error) {
          console.error('Error fetching products:', error);
      }
    };

    if (loading) {
      return (
          <div className="h-screen flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mr-3"></div>
              <div className="text-2xl">Loading...</div>
          </div>
      );
    }

    const formatCurrency = (value: number) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const imageBodyTemplate = (product: Product) => {
      return <Image width={350} height={500} src={`${product.image}`} alt={product.image} />;
    };

    const priceBodyTemplate = (product: Product) => {
        return formatCurrency(product.price);
    };

    const ratingBodyTemplate = (product: Product) => {
        return <Rating value={product.rating} readOnly cancel={false} />;
    };

    const statusBodyTemplate = (product: Product) => {
        return <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>;
    };

    const getSeverity = (product: Product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    const header = (
        <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <span className="text-xl text-900 font-bold text-center w-[100vw] ">Products</span>
            <Button icon="pi pi-refresh" rounded raised onClick={fetchProducts} />
        </div>
    );
    const footer = `In total there are ${products ? products.length : 0} products.`;

    return (
        <div className="card bg-gray-600 p-12 w-[77vw] right-0 absolute ">
            <DataTable value={products} header={header} tableStyle={{ minWidth: '60rem' }}>
                <Column field="title" header="Title" bodyStyle={{ paddingTop: '3rem', paddingBottom: '3rem', width: '28rem' }}></Column>
                <Column header="Image" body={imageBodyTemplate} bodyStyle={{ paddingTop: '1rem', paddingBottom: '1rem' }}></Column>
                <Column field="price" header="Price" body={priceBodyTemplate}></Column>
                <Column field="category" header="Category"></Column>
                <Column field="rating" header="Reviews" body={ratingBodyTemplate}></Column>
                <Column header="CRUD"></Column>
            </DataTable>
            <p className='text-center bg-blue-600'>{footer}</p>
        </div>
    );
}
