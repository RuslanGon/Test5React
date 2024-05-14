import { Suspense, lazy, useEffect, useRef, useState } from "react"
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom"
import { reguestProductDetailsById } from "../serveses/api"
import Loader from "../component/Loader/Loader"

// import CommentPage from "./CommentPage"
// import ReviesPage from "./ReviesPage"

const CommentPage = lazy(() => import('./CommentPage'))
const ReviesPage = lazy(() => import('./ReviesPage'))


const ProductDetailsPage = () => {

  const location = useLocation()
  const backLinkRef = useRef(location.state ?? '/')

  const {productId} = useParams()

  const [productDetails, setProductDetails] = useState(null)

  useEffect(() => {
    async function fetchProductDetails() {
      try {
        const data = await reguestProductDetailsById(productId);
        setProductDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductDetails();
  }, [productId]);

  return (
    <div>
      <h1>Product details {productId}</h1>
      <Link to={backLinkRef.current}>←Go back</Link>
      {productDetails !== null && (
        <div>
          <img src={productDetails.thumbnail} alt={productDetails.title} />
          <h3>Title: {productDetails.title} </h3>
          <p>Brand: {productDetails.brand}</p>
          <p>Price: {productDetails.price}</p>
        </div>
      )}
      <Link to="comments">Comments</Link>
      <Link to="reviews">Revies</Link>
      <Suspense fallback={<Loader />}> 
        <Routes>
          <Route path="comments" element={<CommentPage />} />
          <Route path="reviews" element={<ReviesPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default ProductDetailsPage