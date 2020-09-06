const initialState = {
  age: 25,
};

export const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "AGE_UP") {
    newState.age++;
  }
  if (action.type === "AGE_DOWN") {
    newState.age--;
  }

  return newState;
};
