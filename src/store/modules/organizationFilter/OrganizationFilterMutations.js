export default {
  SET_CURRENT_FILTER (state, currentFilters) {
    state.currentFilters = currentFilters
  },
  SET_STATE (state, filter) {
    state.currentFilters[filter.organizationId] = filter.state
    localStorage.setItem('organizationFilter', JSON.stringify(state.currentFilters))
  }
}
