import { createBrowserHistory } from 'history'

export default createBrowserHistory({
  // Reference: https://stackoverflow.com/questions/43822589/react-router-v4-browserhistory-is-undefined
  forceRefresh: true
})