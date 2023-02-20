export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
};

export const loginAction = (data: any) => {
  return {
    type: "LOG_IN",
    data,
  };
};

export const logoutAction = (data: any) => {
  return {
    type: "LOG_OUT",
    data,
  };
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case "LOG_OUT":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
