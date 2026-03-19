import './CheckoutPageHeader.css'
import './CheckoutPage.css'
import { CartItem } from '../components/cartItem.jsx'
import axios from 'axios'
import { useEffect, useState } from 'react'



export function CheckoutPage({ cart }) {
    const [deliveryOptions, setDeliveryOptions] = useState([]);

    useEffect(() => {
        axios.get('/api/delivery-options?estimatedDeliveryTime')
            .then((response) => {
                setDeliveryOptions(response.data)
            })
    }
        , []);

    return (
        <>
            <title>Checkout</title>

            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <a href="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </a>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">
                        {cart.map((cartItem) => {
                            const selectedDeliveryOption = deliveryOptions
                                .find((deliveryOption)=>{
                                    return deliveryOption.id === cartItem.deliveryOptionId
                                });
                            return (
                                <CartItem
                                    key={cartItem.id}
                                    id={cartItem.id}
                                    quantity={cartItem.quantity}
                                    product={cartItem.product}
                                    deliveryOptionId={cartItem.deliveryOptionId}
                                    deliveryOptions={deliveryOptions}
                                    selectedDeliveryOption={selectedDeliveryOption}
                                />
                            )
                        }
                        )}
                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>

                        <div className="payment-summary-row">
                            <div>Items (3):</div>
                            <div className="payment-summary-money">$42.75</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Shipping &amp; handling:</div>
                            <div className="payment-summary-money">$4.99</div>
                        </div>

                        <div className="payment-summary-row subtotal-row">
                            <div>Total before tax:</div>
                            <div className="payment-summary-money">$47.74</div>
                        </div>

                        <div className="payment-summary-row">
                            <div>Estimated tax (10%):</div>
                            <div className="payment-summary-money">$4.77</div>
                        </div>

                        <div className="payment-summary-row total-row">
                            <div>Order total:</div>
                            <div className="payment-summary-money">$52.51</div>
                        </div>

                        <button className="place-order-button button-primary">
                            Place your order
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}