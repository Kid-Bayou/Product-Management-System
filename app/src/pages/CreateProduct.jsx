import { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

import cancel from "../assets/cancel.png";

function CreateProduct({ closeModal }) {

    const productsCollectionRef = collection(db, "product");
    const [nName, setName] = useState("");
    const [nDescription, setDescription] = useState("");
    const [nPrice, setPrice] = useState(0);
    const [nQuantity, setQuantity] = useState(0);



    const createProduct = async () => {
        await addDoc(productsCollectionRef, {name: nName, description: nDescription, price: nPrice, quantity: nQuantity})
        window.location.reload();
    }

  return (
    <>
      <div className="modal-background">
        <div className="modal-container">
          <div className="modal-button-container">
            <img
              src={cancel}
              onClick={() => closeModal(false)}
              className="modal-button"
            />
          </div>

          <h1 className="modal-header">Create Product</h1>
          <div className="product-info">
            <div className="create-input"><p>Name:</p> <input type="text" onChange={(event) => {setName(event.target.value);}}/></div>
            <div className="create-input"><p>Description:</p> <input type="text" onChange={(event) => {setDescription(event.target.value);}} /></div>
            <div className="create-input"><p>Price:</p> <input type="number" onChange={(event) => {setPrice(event.target.value);}} /></div>
            <div className="create-input"><p>Quantity in Stock:</p> <input type="number" onChange={(event) => {setQuantity(event.target.value);}} /></div>
            <button onClick={createProduct}>Add</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;
