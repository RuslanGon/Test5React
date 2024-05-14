import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { reguestProductDetailsById } from "../serveses/api"


const ProductDetailsPage = () => {
const {productId} = useParams
const [productDetails, setProductDetails] = useState(null)

useEffect(() => {
async function fethProductDenails () {
  try{
const data = await reguestProductDetailsById(productId)
setProductDetails(data)

  }catch(error){
    console.log(error);
  }
}
fethProductDenails()
}, [productId])

  return (
    <>
    <h1>Product list</h1>
   {productDetails !== null &&  <div>
      <img src={productDetails.thumbnail} alt={productDetails.title}  />
      <h2>Title: {productDetails.title}</h2>
      <p>Brand: {productDetails.brand}</p>
      <p>Price: {productDetails.price}</p>
    </div>}
    </>
  )
}

export default ProductDetailsPage