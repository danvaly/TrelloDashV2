export default {
  SET_CURRENT_FILTER (state, currentFilters) {
    state.currentFilters = currentFilters
  },
  ADD_FILTER (state, filter) {
    if (!state.currentFilters.includes(filter)) {
      state.currentFilters.push(filter)
    }
    localStorage.setItem('hiddenBoards', JSON.stringify(state.currentFilters))
  },
  REMOVE_FILTER (state, filter) {
    const index = state.currentFilters.indexOf(filter)
    if (index > -1) {
      state.currentFilters.splice(index, 1)
    }
    localStorage.setItem('hiddenBoards', JSON.stringify(state.currentFilters))
  }
}
