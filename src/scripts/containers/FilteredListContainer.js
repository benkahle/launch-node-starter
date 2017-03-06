import { connect } from 'react-redux'
import FilteredList from '../components/FilteredList'

const mapStateToProps = (state, ownProps) => {
  return {
    listData: state.filteredList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}


const FilteredListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilteredList)

export default FilteredListContainer
