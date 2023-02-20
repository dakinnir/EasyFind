export const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_UPDATE":
      return { ...state, [action.input]: action.value };
    default:
      return state;
  }
};