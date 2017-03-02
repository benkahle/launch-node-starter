import { combineReducers } from 'redux'
import { SET_COUNTER_VALUE } from "../actions"

const counterValue = (state = 0, action) => {
  switch (action.type) {
    case SET_COUNTER_VALUE:
        return action.value;
      break;
    default:
      return state;
  }
}

const app = combineReducers({
  counterValue
})

export default app
