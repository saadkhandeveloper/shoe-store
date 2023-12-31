import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'

const ProductDetails = () => {
  return (
    <div className='w-full md:py-20'>
     <Wrapper >
        <div className='flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]'>
            {/* left column start */}
<div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0 " >
    <ProductDetailsCarousel />
</div>
            {/* left column end */}

            {/* Right Coloumn start */}
<div className="flex-[1] py-3">
    {/* Product title */}
<dir className="text-[34px] font-semibold mb-2">
    Jordan Retro 6 G
</dir>

{/* Product subtitle */}
<div className="text-lg font-semibold mb-5">
    Men&apos;s Golf Shoes
</div> 

{/* Product price */}
<div className='text-lg font-semibold'>
    MRP : $ 195
</div>
<div className='text-md font-medium text-black/[0.5]'>
    incl. of taxes
</div>
<div className="text-md font-medium text-black/[0.5] mb-20"> {`(Also includes all applicable duties)`} </div>

{/* PRODUCT SIZE RANGE START */}
<div className="mb-10">
    {/* Heading start */}
    <div className="flex justify-between mb-2">
        <div className="text-md font-semibold">
            Select Size
        </div>
         <div className="text-md font-medium text-black/[0.5] cursor-pointer">Select Guide</div>
    </div>
    {/* Heading end */}

    {/* SIZE START */}
<div className="grid grid-cols-3 gap-2">
    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
        UK 6
    </div>

    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
        UK 9
    </div>

    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
        UK 9.5
    </div>

    <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
        UK 10
    </div>


    <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
        UK 15
    </div>

    <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
        UK 13
    </div>

    <div className="border rounded-md text-center py-3 font-medium  cursor-not-allowed bg-black/[0.1] opacity-50">
        UK 11
    </div>
</div>
    {/* SIZE END */}

    {/*SHOW ERROR START  */}
<div className="text-red-600 mt-1">
    Size selection is required
</div>
    {/*SHOW ERROR END  */}

</div>
{/* PRODUCT SIZE RANGE END */}


{/* ADD TO CART BUTTON START   */}
<button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3">
    Add To Cart
</button>
{/* ADD TO CART BUTTON END   */}

{/* WHISHLIST BUTTON START */}
<button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10"> 
Wishlist
<IoMdHeartEmpty />
</button>
{/* WHISHLIST BUTTON END */}

<div>
    <div className="text-lg font-bold mb-5">
        Product Details
    </div>
    <div className="text-md mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, odit consectetur similique ullam doloribus consequatur inventore doloremque, id, dicta tempora a tenetur fugiat. Perspiciatis rem, fugit repellendus in libero ipsa?
    </div>
    <div className="text-md mb-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, odit consectetur similique ullam doloribus consequatur inventore doloremque, id, dicta tempora a tenetur fugiat. Perspiciatis rem, fugit repellendus in libero ipsa?
    </div>
</div>
</div>
            {/* Right Coloumn end */}
        </div>

        <RelatedProducts />
     </Wrapper>
    </div>
  )
}

export default ProductDetails