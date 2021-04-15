import { createStore } from "redux";
const tiger = {
  title: "lalala",
  data: [],
};
// const increase = {
//   type: "加加加",
// };
// const decrease = {
//   type: "减减减",
// };

const reducer = (state = tiger, action) => {
  switch (action.type) {
    case "加加加":
      console.log(action);
      return { ...state, title: action.state };
    case "减减减":
      return { ...state, data: action.state };

    default:
      return state;
  }
};
const store = createStore(reducer);
console.log(store);
export default store;
