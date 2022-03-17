import {
  SET_CONTAINERCSS,

} from "../constants/actionTypes/layoutType.js";

const layoutReducer = (state, { payload, type }) => {
  switch (type) {

    case SET_CONTAINERCSS:
      return {
        ...state,
        layout: {
          ...state.layout,
          containerCSS: payload,
        },
      };

    default:
      return state;
  }
};

export default layoutReducer;
