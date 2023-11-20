import React, { Fragment, useState } from "react";
import "./todo.css";
import { useDispatch, useSelector } from "react-redux"
import { addTodo, deleteTodo, removeTodo } from "../actions/index"
const Todo = () => {

  const [inputData, setinputData] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);


  return (


    <Fragment>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figurecaption>Add Your List here</figurecaption>
          </figure>
          <div className="addItems">
            <input type="text" placeholder="enter here" value={inputData} onChange={(event) => setinputData(event.target.value)} />
            <button className="button" onClick={() => dispatch(addTodo(inputData), setinputData(""))}>+</button>
          </div>

          <div className="showItems">{
            list.map((elem) => {
              return (
                <div className="eachItems" key={elem.id}>
                  <h3>{elem.data}</h3>
                  <button className="button" onClick={() => { dispatch(deleteTodo(elem.id)); }}>-</button>
                </div>
              );
            })
          }
          </div>
          <div className="remove all">
          <button onClick={()=>dispatch(removeTodo())}>Remove all</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
