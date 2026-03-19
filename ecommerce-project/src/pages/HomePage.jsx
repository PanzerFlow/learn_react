import './HomePage.css'
import { useEffect, useState } from 'react'
import { Header } from '../components/header.jsx'
import { Product } from '../components/product.jsx'
import axios from 'axios'
export function HomePage() {
    const [prodcuts,setProdcuts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        axios.get('/api/products')
            .then((response)=>{
                setProdcuts(response.data)
            })
        }
    ,[]);

    useEffect(()=>{
        axios.get('/api/cart-items')
            .then((response)=>{
                setCart(response.data)
            })
        }
    ,[]);

    return (
        <>
            <title>ECommerce Project</title>

            <Header cart={cart} />

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
