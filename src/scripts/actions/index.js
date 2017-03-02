export const SET_COUNTER_VALUE = "SET_COUNTER_VALUE"

export const setCounterValue = (value) => {
  return {
    type: SET_COUNTER_VALUE,
    value: value
  }
}
