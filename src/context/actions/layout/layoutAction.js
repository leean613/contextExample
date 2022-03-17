import {
  SET_CONTAINERCSS,
} from "../../constants/actionTypes/layoutType";


const setContainerCSSForLayout = (name) => (dispatch) => {
  dispatch({
    type: SET_CONTAINERCSS,
    payload: name,
  });
};


export const layoutAction = {
  setContainerCSSForLayout,
};
