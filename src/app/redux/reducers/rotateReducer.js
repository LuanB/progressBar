
const initialState = {
  rotating: true

};


export default (state = initialState, action) => {
  switch (action.type) {
    case "rotate":
      return {
        rotating: action.payload
      };
    default:
      return state;
  }
};
