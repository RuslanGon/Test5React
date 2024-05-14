import { useParams } from "react-router-dom"


const ProductDetailsPage = () => {
const {productId} = useParams

  return (
    <div>
      <img src="" alt="" />
      <h2>Title:</h2>
      <p>Brand:</p>
      <p>Price:</p>
    </div>
  )
}

export default ProductDetailsPage