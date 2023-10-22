import cancel from "../assets/cancel.png";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";

import { useState } from "react";

import UpdateProduct from "./UpdateProduct";
import DeleteProduct from "./DeleteProduct";

function ProductDetails({ closeModal, product }) {
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-button-container">
            <img
              src={edit}
              onClick={() => {
                setOpenUpdateModal(true);
              }}
              className="modal-button"
            />
            <img
              src={del}
              onClick={() => {
                setOpenDeleteModal(true);
              }}
              className="modal-button"
            />
            <img
              src={cancel}
              onClick={() => closeModal(false)}
              className="modal-button"
            />
          </div>

          <h1 className="modal-header">Product Details</h1>
          <div className="product-info">
            <p>Name: {product.name}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quantity in Stock: {product.quantity}</p>
            <p>Availability:</p>
          </div>
        </div>
      </div>

      {openUpdateModal && (
        <UpdateProduct closeModal={setOpenUpdateModal} product={product} />
      )}
      {openDeleteModal && (
        <DeleteProduct closeModal={setOpenDeleteModal} product={product} />
      )}
    </>
  );
}

export default ProductDetails;
