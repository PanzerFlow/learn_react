import './HomePage.css'
import { Header } from '../components/header.jsx'
import { Product } from '../components/product.jsx'
export function HomePage({prodcuts,cart}) {

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
