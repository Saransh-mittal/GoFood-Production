export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          price: action.price,
          qty: action.qty,
          size: action.size,
          img: action.img
        },
      ];
    case "REMOVE": {
      let newArr = [...state];
      newArr.splice(action.index, 1);
      return newArr;
    }
    case "UPDATE": {
      let newArr = [...state];
      //console.log(state);
      newArr.find((food, index) => {
        if (food.id === action.id) {
          newArr[index] = {
            ...food,
            qty: parseInt(food.qty) + parseInt(action.qty),
            price: food.price + action.price,
          };
          return newArr;
        }
      });
      return newArr;
    }
    case "DROP":{
      return [];
    }
    default:
      console.log("Error in reducer");
  }
  return state;
};
