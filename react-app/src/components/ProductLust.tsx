import React, { useState } from 'react'

const ProductLust = () => {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log('fecthing products')
        setProducts(['Clothing', 'Household']);
        console.log('Testing')

    }, []);

    return (
        <div>
            <ProductLust />
        </div>
    )
}

export default ProductLust
