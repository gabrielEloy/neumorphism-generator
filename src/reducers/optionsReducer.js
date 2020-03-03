import actionCreators from "../actions/actionCreators";

export const optionsInitialState = {
  size: 0,
  radius: 0,
  distance: 0,
  intensity: 0,
  blur: 0
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
  }
}
