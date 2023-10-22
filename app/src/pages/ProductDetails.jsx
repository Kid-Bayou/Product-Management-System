import cancel from "../assets/cancel.png";
import edit from "../assets/edit.png";
import del from "../assets/delete.png";

function ProductDetails({ closeModal }) {
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-button-container">
            <img src={edit} className="modal-button" />
            <img src={del} className="modal-button" />
            <img
              src={cancel}
              onClick={() => closeModal(false)}
              className="modal-button"
            />
          </div>

          <h1 className="modal-header">Product Details</h1>
          <div className="product-info">
            <p>Name:</p>
            <p>Description:</p>
            <p>Price:</p>
            <p>Quantity in Stock:</p>
            <p>Availability:</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
