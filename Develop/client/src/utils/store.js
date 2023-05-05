//import { createStore } from 'redux'
import configureStore from '@reduxjs/toolkit'; //replacing createStore with configureStore to resolve deprecated warning
import rootReducer from './reducer'

//const store = createStore(rootReducer)
const store = configureStore(rootReducer)

export default store
//https://redux.js.org/tutorials/fundamentals/part-4-store