import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function Products() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "product");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(
        data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      console.log(data)
      console.log(products)
    };

    getProducts();
  }, []);

  return (
    <>
      <h1>Products</h1>

      <div>
        {products.map((product) => {
            return (
                <div key={product.id}>
                    <h4>Name: {product.name}</h4>
                    <p>Description: {product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            )
        })}
      </div>
    </>
  );
}

export default Products;
