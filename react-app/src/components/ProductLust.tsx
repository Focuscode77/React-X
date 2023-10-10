import React, { useState } from 'react'

const ProductLust = () => {

    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log('fecthing products')
        setProducts(['Clothing', 'Household']);

    })

    return (
        <div>
            <ProductLust />
        </div>
    )
}

export default ProductLust
