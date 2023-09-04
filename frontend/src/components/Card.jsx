import { useContext, useEffect } from "react";
import { cartContext } from "../App";
import { useState } from "react";
const Card = ({ foodName, options, imgSrc,id }) => {
  let priceOptions = Object.keys(options);
  const { state, dispatch } = useContext(cartContext);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState(priceOptions[1]);

  const addToCart = async() =>{
    let food = [];
    for(const item of state)
    {
      if(item.id===id)
      {
        food = item;
        break;
      }
    }
    if(food.size === size)
    {
      //console.log(food);
      await dispatch({type:"UPDATE",id:id , price:finalPrice, qty: qty });
      return;
    }
    await dispatch({type:"ADD",id:id , name:foodName, price:finalPrice, qty: qty, size: size, img: imgSrc });
  }
  
  let finalPrice = qty*options[size];
  return (
    <div>
      <div
        className="card text-white"
        style={{
          minwidth: "20rem",
          maxHeight: "440px",
          backgroundColor: "rgb(24, 24, 24)",
          borderColor: "rgb(112, 112, 112)",
          borderWidth: "1px",
        }}
      >
        <img src={imgSrc} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{foodName}</h5>
          <p className="card-text fs-4">Some quick example text</p>
          <div className="container w-100">
            <select
              className="rounded m-2 fs-5 h-100 text-white fw-semibold"
              style={{ backgroundColor: "lightgreen" }}
              onChange={(e)=> setQty(e.target.value)}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select
              className="rounded m-2 fs-5 text-white fw-semibold"
              style={{ backgroundColor: "lightgreen" }}
              onChange={(e)=> setSize(e.target.value)}
            >
              {priceOptions
                .filter((item) => item !== "_id")
                .map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price: ₹{finalPrice}</div>
            <hr></hr>
            <button
              className="fs-5 text-white rounded-2 p-1 m-2"
              style={{ backgroundColor: "lightgreen" }}
              onClick={addToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
