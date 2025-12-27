import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext/ShopContext'
import { FiTrash2 } from 'react-icons/fi'
import { IoMdAdd, IoMdRemove } from 'react-icons/io'
import './Cart.css'

const CartDetails = ({item}) => {

    const {increaseQuantity, decreaseQuantity, removeFromCart} = useContext(ShopContext)

    const {id, title, image, price, amount} = item

  return (
    <div className='cart-item'>
      <div className="product-details">
        <img src={image} alt="" />
        <div className="product_info">
            <h3>{title}</h3>
            <div className="cart_item_remove" onClick={() => removeFromCart(id)}>
                <FiTrash2 />
            </div>

        </div>
      </div>

      <div className="quantity">

        <button onClick={() => decreaseQuantity(id)}>
            <IoMdRemove />
        </button>
        <span>{amount}</span>
        <button onClick={() => increaseQuantity(id)}>
            <IoMdAdd />
        </button>

      </div>
      <div className="price">
        ${price}
      </div>
      <div className="total">
        {`$ ${parseFloat(price * amount).toFixed(2)}`}
      </div>
    </div>
  )
}

export default CartDetails
