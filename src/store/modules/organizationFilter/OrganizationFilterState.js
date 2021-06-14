export default {
  currentFilters: localStorage.getItem('organizationFilter') ? JSON.parse(localStorage.getItem('organizationFilter')) : { }
}
