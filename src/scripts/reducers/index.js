import { combineReducers } from 'redux'
import { FOOBAR } from "../actions"

const base = (state = {}, action) => {
  switch (action.type) {
    case FOOBAR:
        return state;
      break;
    default:
      return state;
  }
}

const app = combineReducers({
  base
})

export default app
