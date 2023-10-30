import React, { useState } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log('fecthing products')
        setProducts(['Clothing', 'Household']);
        console.log('Testing')
        console.log('Testing-Two')
        console.log('Last-Three')

    }, []);

    return (
        <div>
            <ProductList />
        </div>
    )
}

export default ProductList
