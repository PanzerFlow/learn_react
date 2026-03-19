import './HomePage.css'
import { Header } from '../components/header.jsx'
import { Product } from '../components/product.jsx'
import { products } from '../../starting-code/data/products.js'
export function HomePage() {
    return (
        <>
            <title>ECommerce Project</title>

            <Header />

            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
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