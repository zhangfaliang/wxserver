import React from 'react'
import Footer from './todo/Footer'
import AddTodo from '../containers/AppTodo'
import VisibleTodoList from '../containers/VisibilityTodoList';
import UndoRedo from '../containers/UndoRedo';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo/>
  </div>
)

export default App