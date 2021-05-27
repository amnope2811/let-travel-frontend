import Super from "./super";
const initialState = {
  auth:{
    me:null
  }
};
export default function deepmap(state = initialState, action) {
  const reducer = new Super({ state, action });
  switch (action.type) {
    default:
      return reducer.observe("api");
  }
}
