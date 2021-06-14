export default {
  currentFilters: localStorage.getItem('hiddenBoards') ? JSON.parse(localStorage.getItem('hiddenBoards')) : []
}
