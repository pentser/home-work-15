import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Exercise3() {


   const products =[ 
    {
      id: 1,
      name:"Computer",
      price: 2456.0
    },
    {
      id:2,
      name:"Paper 4A",
      price: 39.5
    },
    {
      id:3,
      name:"Pen",
      price: 9.4
    },
    
   
   ]

   const [cart_ar,setCart_ar]= useState([]);
   const [cart,setCart] = useState(0);
    const navigate=useNavigate();

   const addToCart = (id)=>{
    setCart(cart+1);

    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      setCart_ar((prevCart) => [...prevCart, productToAdd]);
    }
    console.log(cart_ar);
   }


  return (
    <div className="border-2 border-gray-500 bg-white max-w-md mx-auto">
   
    <div className="flex items-center justify-between bg-gray-50 px-5 py-3 border-b border-gray-300">
   
      <div className="flex items-center">
       
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-6 h-6 cursor-pointer" viewBox="0 0 16 16">
      <path d="M8.35 5.046a.615.615 0 0 0-.54.575c-.009.13-.006.14.289.899.67 1.727.833 2.142.86 2.2q.101.215.277.395c.089.092.148.141.247.208.176.117.262.15.944.351.664.197 1.026.327 1.338.482.405.201.688.43.866.7.128.195.242.544.291.896.02.137.02.44 0 .564-.041.27-.124.495-.252.684-.067.1-.044.084.055-.039.278-.346.562-.938.707-1.475a4.42 4.42 0 0 0-2.14-5.028 70 70 0 0 0-.888-.465l-.53-.277-.353-.184c-.16-.082-.266-.138-.345-.18-.368-.192-.523-.27-.568-.283a1 1 0 0 0-.194-.03z"/>
      <path d="M9.152 11.493a3 3 0 0 0-.135.083 320 320 0 0 0-1.513.934l-.8.496c-.012.01-.587.367-.876.543a1.9 1.9 0 0 1-.732.257c-.12.017-.349.017-.47 0a1.9 1.9 0 0 1-.884-.358 2.5 2.5 0 0 1-.365-.364 1.9 1.9 0 0 1-.34-.76 1 1 0 0 0-.027-.121c-.005-.006.004.092.022.22.018.132.057.324.098.489a4.1 4.1 0 0 0 2.487 2.796c.359.142.72.23 1.114.275.147.016.566.023.72.011a4.1 4.1 0 0 0 1.956-.661l.235-.149.394-.248.258-.163 1.164-.736c.51-.32.663-.433.9-.665.099-.097.248-.262.255-.283.002-.005.028-.046.059-.091a1.64 1.64 0 0 0 .25-.682c.02-.124.02-.427 0-.565a3 3 0 0 0-.213-.758c-.15-.314-.47-.6-.928-.83a2 2 0 0 0-.273-.12c-.006 0-.433.26-.948.58l-1.113.687z"/>
      <path d="m3.004 12.184.03.129c.089.402.245.693.515.963a1.82 1.82 0 0 0 1.312.543c.361 0 .673-.09.994-.287l.472-.29.373-.23V5.334c0-1.537-.003-2.45-.008-2.521a1.82 1.82 0 0 0-.535-1.177c-.097-.096-.18-.16-.427-.33L4.183.24c-.239-.163-.258-.175-.33-.2a.63.63 0 0 0-.842.464c-.009.042-.01.603-.01 3.646l.003 8.035Z"/>
     </svg>
      
        <h1 className="ml-4 text-xl font-bold">SV-SHOP</h1>
      </div>
    
      <div className="flex items-center">
     
        <img
          src={"../src/assets/images/cartIcon.webp"}
          alt="Cart icon"
          className="w-6 h-6 cursor-pointer"
          onClick={() => {
            navigate("/exercise3/exercise3_1", {
              state: {
                cart_ar: cart_ar
              }
            });
          }}
        />
      </div>
    </div>

    <div className="p-5">
      <h2 className="mb-5 text-lg font-semibold">List of products</h2>
      <div className="flex flex-col gap-2">

        {products.map((product)=>{
          return (
          <div key={product.id} className="flex items-center justify-between bg-blue-600 text-white rounded-md p-4">
          <span className="font-bold">{product.name} price = {product.price}</span>
          <button onClick={()=>addToCart(product.id)} className="bg-white text-blue-600 px-3 py-1 font-bold rounded hover:bg-gray-100">
            +
          </button>
        </div>
          )

        })}

      </div>
    </div>
  </div>
  )
}

export default Exercise3
