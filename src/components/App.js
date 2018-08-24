import React from "react";
import Footer from "./todo/Footer";
import AddTodo from "../containers/AppTodo";
import VisibleTodoList from "../containers/VisibilityTodoList";
import UndoRedo from "../containers/UndoRedo";
import APILink from "../containers/APILink";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <UndoRedo />
    <APILink />
    <a
      href="itms-services://?action=download-manifest&url=https://ios.8win.com/ZYLottery.plist"
    >
      dfkjghjdfg
    </a>
  </div>
);

export default App;
