import cancel from "../assets/cancel.png";

function DeleteProducts({ closeModal }) {
  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <p>Are you sure you want to delete this product?</p>
          <div className="delete-btn-container">
            <button className="delete-btn">Yes</button>
            <button className="delete-btn" onClick={() => closeModal(false)}>No</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteProducts;
