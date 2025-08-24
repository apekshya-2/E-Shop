import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext' // adjust the path

const ProductListView = ({ product }) => {
  const navigate = useNavigate()
  const { addToCart } = useCart()

  return (
    <div className='bg-gray-100 flex gap-7 items-start p-4 rounded-md mt-4'>
      
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        className='md:h-60 md:w-60 h-25 w-25 object-contain rounded-md cursor-pointer'
        onClick={() => navigate(`/products/${product.id}`)}
      />

      {/* Text/details */}
      <div className='flex flex-col justify-between space-y-3 w-full'>
        <h1 className='font-bold md:text-xl text-lg line-clamp-3 hover:text-red-400 md:w-full w-[220px]'>{product.title}</h1>
        
        <p className='font-semibold flex items-center md:text-lg text-sm'>$
          <span className='text-4xl mr-2'>{product.price}</span>
          ({product.discount})% off
        </p>
        
        <p>
          FREE delivery <span className='font-semibold'>Fri,18 August</span> <br />
          or fastest delivery <span className='font-semibold'>Tomorrow,17 August</span>
        </p>
        
        <button 
          onClick={() => addToCart(product)} 
          className='bg-red-500 text-white px-3 py-2 rounded-md w-fit hover:bg-red-600'
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductListView
