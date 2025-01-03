import React, { useEffect, useState } from 'react';
import { Product } from '@/types/product';

interface ListProps {
    input: string;
}

const List: React.FC<ListProps> = ({ input }) => {
    const [data, setData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products/getAllProducts');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const products = await response.json();
                setData(products.data);
                console.log("products.data", products.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    // Filter data based on input
    useEffect(() => {
        if (input.trim() === '') {
            setFilteredData(data);
        } else {
            const lowerCaseInput = input.toLowerCase();
            const filtered = data.filter((product) =>
                product.name.toLowerCase().includes(lowerCaseInput) ||
                product.description.toLowerCase().includes(lowerCaseInput) ||
                product.category.toLowerCase().includes(lowerCaseInput)
            );
            setFilteredData(filtered);
        }
    }, [input, data]);
    console.log("filteredData.data", filteredData.data);
    return (
        <ul>
            {filteredData.length === 0 ? (
                <li>No products found</li>
            ) : (
                filteredData.map((product) => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - {product.category} - ${product.price}
                    </li>
                ))
            )}
        </ul>
    );
};

export default List;