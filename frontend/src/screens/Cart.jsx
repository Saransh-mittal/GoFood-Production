import Delete from "@mui/icons-material/Delete";


import { cartContext } from "../App";
import { useContext } from "react";

const Cart = () => {
    const {state,dispatch} = useContext(cartContext);
    if(state.length===0) return(<div className="m-5 w-100 text-center text-white fs-3">Cart is empty!</div>);
    let totalPrice = state.reduce((total, food) => total + food.price, 0);

    const handleCheckout = async() => {
      try {
        //console.log(data);
        const response = await fetch("/api/orderdata", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            order_data:state,
            email:localStorage.getItem("userEmail"),
            order_date: new Date().toDateString()
          }),
        });
  
        const json = await response.json();
        //console.log(json);
        if (!json.success) alert("Sorry something went wrong!!");
        else {
          alert("Order Placed");
          dispatch({ type: "DROP" })
        }
      } catch (error) {
        console.log(error);
      }
    }
  return (
    <div>
      <div className="container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md bg-dark">
        <table className="table table-hover bg-dark">
          <thead className=" text-success fs-4 bg-dark">
            <tr className=" text-success fs-4 bg-dark">
              <th className=" text-success fs-4 bg-dark" scope="col">#</th>
              <th className=" text-success fs-4 bg-dark" scope="col">Name</th>
              <th className=" text-success fs-4 bg-dark" scope="col">Quantity</th>
              <th className=" text-success fs-4 bg-dark" scope="col">Option</th>
              <th className=" text-success fs-4 bg-dark" scope="col">Amount</th>
              <th className=" text-success fs-4 bg-dark" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {state.map((food, index) => (
              <tr key={index}>
                <th className="bg-dark text-white" scope='row' >{index + 1}</th>
                <td className="bg-dark text-white">{food.name}</td>
                <td className="bg-dark text-white">{food.qty}</td>
                <td className="bg-dark text-white">{food.size}</td>
                <td className="bg-dark text-white">{food.price}</td>
                <td className="bg-dark text-white"><button type="button" className="btn p-0 text-white"><Delete onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
            ))}
          </tbody>
        </table>
        <div><h1 className='fs-2 text-white'>Total Price: {totalPrice}/-</h1></div>
        <div>
          <button className='btn bg-success mt-5 ' onClick={handleCheckout} > Check Out </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
