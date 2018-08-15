import React from 'react'
import Footer from './todo/Footer'
import AddTodo from '../containers/AppTodo'
import VisibleTodoList from '../containers/VisibilityTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App