import './HomePage.css'
import { useEffect, useState } from 'react'
import { Header } from '../components/header.jsx'
import { Product } from '../components/product.jsx'
import axios from 'axios'
export function HomePage() {
    const [prodcuts,setProdcuts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/api/products')
            .then((response)=>{
                setProdcuts(response.data)
            })
        }
    ,[]);

    return (
        <>
            <title>ECommerce Project</title>

            <Header />

            <div className="home-page">
                <div className="products-grid">
                    {prodcuts.map((product) => {
                        return (
                            <Product
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                rating={product.rating}
                                priceCents={product.priceCents}
                            />
                        )
                    }
                    )}
                </div>
            </div>
        </>
    )
}
