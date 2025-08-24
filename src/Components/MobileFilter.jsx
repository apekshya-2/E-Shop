import React from 'react'
import { FaFilter } from "react-icons/fa";


export const MobileFilter = ({openFilter,setOpenFilter,search, setSearch, brand, setBrand, priceRange, setPriceRange, category, setCategory, handleBrandChange,handleCategoryChange}) => {
  return (
    <>
    <div className='bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5'>
        <h1 className='font-semibold text-xl'>Filters</h1>
        <FaFilter onClick={()=>setOpenFilter(true)} className='text-gray-800'/>


    </div>
    {
        openFilter ? <div className='bg-gray-100 p-2 md:hidden'>
            <input type='text' placeholder='Search..' value={search} onChange={(e)=>SetSearch(e.target.value)}
            className='bg-white p-2 rounded-md border-gray-400 border-2'


            />

             {/* category only data */}
            <h1 className='mt-5 font-semibold text-xl'>Category</h1>
            <div className='flex flex-col gap-2 mt-3'>
                {
                    categoryOnlyData?.map((item, index) => {
                        return (
                            <div key={index} className='flex gap-2'>
                                <input
                                    type='radio'
                                    name="category"
                                    checked={category === item}
                                    value={item}
                                    onChange={handleCategoryChange} 
                                />
                                <button className='cursor-pointer uppercase'>{item}</button>
                            </div>
                        )
                    })
                }
            </div>

            {/* Brand only data */}
            <h1 className='mt-5 font-semibold text-xl mb-3'>Brand</h1>
            <select
                // name=""
                // id=""
                className='bg-white w-full p-2 border-gray-200 border-2 rounded-md'
                value={brand}
                onChange={ handleBrandChange }
            >
                <option value="All">All</option>
                {
                    brandOnlyData?.map((item, index) => {
                        return (
                            <option key={index} value={item}>
                                {item.toUpperCase()}
                            </option>
                        )
                    })
                }
            </select>


        </div>:null
    }
    </>
    
  )
}
