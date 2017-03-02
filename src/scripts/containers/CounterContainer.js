import { connect } from 'react-redux'
import Counter from '../components/Counter'
import { setCounterValue } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    counterValue: state.counterValue
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setValue: (newValue) => {
      dispatch(setCounterValue(newValue))
    }
  }
}


const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

export default CounterContainer
