import { formatMoney } from '../utils/money'
import dayjs from 'dayjs'


export function CartItem(cartItem) { //shortcut
    const deliveryOptions = cartItem.deliveryOptions
    return (
        <div key={cartItem.id} className="cart-item-container">
            <div className="delivery-date">
                {dayjs(cartItem.selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd MMMM D')
}
            </div>

            <div className="cart-item-details-grid">
                <img className="product-image"
                    src={cartItem.product.image} />

                <div className="cart-item-details">
                    <div className="product-name">
                        {cartItem.product.name}
                    </div>
                    <div className="product-price">
                        {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                        <span>
                            Quantity: <span className="quantity-label">cartItem.quantity</span>
                        </span>
                        <span className="update-quantity-link link-primary">
                            Update
                        </span>
                        <span className="delete-quantity-link link-primary">
                            Delete
                        </span>
                    </div>
                </div>

                <div className="delivery-options">
                    <div className="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    {deliveryOptions.map((deliveryOption) => {
                        let priceString = 'FREE Shipping';
                        if (deliveryOption.priceCents > 0 ){
                            priceString=formatMoney(deliveryOption.priceCents)
                        }
                        return (
                            <div key={deliveryOption.id} className="delivery-option">
                                <input type="radio" 
                                    checked = {deliveryOption.id === cartItem.deliveryOptionId}
                                    className="delivery-option-input"
                                    name={`delivery-option-${cartItem.id}`} />
                                <div>
                                    <div className="delivery-option-date">
                                        {
                                        dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd MMMM D')
                                        }
                                    </div>
                                    <div className="delivery-option-price">
                                        {priceString}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
