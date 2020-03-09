import actionCreators from "../actions/actionCreators";

export const optionsInitialState = {
  size: 60,
  radius: 10,
  distance: 10,
  intensity: 15,
  blur: 20
};

export function optionsReducer(state, action) {
  switch (action.type) {
    case actionCreators.CHANGE_SIZE:
      return {
        ...state,
        size: action.value
      };
    case actionCreators.CHANGE_RADIUS:
      return {
        ...state,
        radius: action.value
      };
    case actionCreators.CHANGE_DISTANCE:
      return {
        ...state,
        distance: action.value
      };
    case actionCreators.CHANGE_INTENSITY:
      return {
        ...state,
        intensity: action.value
      };
    case actionCreators.CHANGE_BLUR:
      return {
        ...state,
        blur: action.value
      };
    default:
      return;
  }
}
