import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductDetails from "./ProductDetails";
import CreateProduct from "./CreateProduct";

function Products() {
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "product");
  const [openModal, setOpenModal] = useState(false);
  const [openModalz, setOpenModalz] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
              <Link
                className="product"
                key={product.id}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedProduct(product);
                }}
                
              >
                <p className="product-name">{product.name}</p>
              </Link>
            );
          })}
        </div>
        <button
          className="add-product-btn"
          onClick={() => {
            setOpenModalz(true);
          }}
        >
          + Add Product
        </button>

        {openModal && <ProductDetails closeModal={setOpenModal} />}
        {openModalz && <CreateProduct closeModal={setOpenModalz} />}
      </div>
    </>
  );
}

export default Products;
