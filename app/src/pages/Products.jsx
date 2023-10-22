import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

function Products() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "product");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
      console.log(products);
    };

    getProducts();
  }, []);

  return (
    <>
      <div className="products-page">
        <h1 className="products-header">Products</h1>

        <div className="products-container">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <p className="product-name">{product.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
