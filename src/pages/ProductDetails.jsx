import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
    const {id} = useParams(); // dynamic parameter that useParams fetches directly from the route

    const [Product, setProduct] = useState(null);

    useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/Users/${id}`) // if the url is valid fetch the route
    .then(response => response.json()) // whatever response is coming save it as json format
    .then((data) => {  // over the data, print it 
      console.log(data)
      setProduct(data); // change the state of the users
    })
  }, [id]);
  
  if(!Product) {
    return <h1>Loading ...</h1>
  }

    return(
        <div>
            <h1>{Product.name}</h1>
            <h2>{Product.id}</h2>
        </div>
    )
}

export default ProductDetails;