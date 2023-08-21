import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTODO, delTODO, checkTodo } from "../../Redux/Reduser/todoSlice";

const Todo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const { todo } = useSelector((s) => s.todo);
  const handlechange = (e) => setValue(e.target.value);
  const addTask = () => {
    let input = document.querySelector(".inpu");
    if (value === "") {
      input.style.border = "2px solid red";
    } else {
      input.style.border = "none";
      dispatch(addTODO(value));
      setValue("");
    }
  };
  const enter = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div className="container bg-gray-300">
      <div className="flex justify-center gap-4 py-10">
        <input
          value={value}
          onChange={handlechange}
          onKeyDown={enter}
          type="search"
          id="default-search"
          className="inpu p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Logos..."
          required
        />
        <button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={addTask}>add</button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
       {
        todo.length ? 
         <ul class="w-[500px] mx-auto text-sm font-medium  bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        {todo.slice(0,6).map((el) => (
          <li class="w-[500px] flex justify-between items-center px-4 py-2 border-b border-gray-200 rounded-t-lg">
            <span
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
              }}
              className={el.isDone ? "line-through" : "none"}
            >
              <input
                onClick={() => dispatch(checkTodo(el))}
                type="checkbox"
              />
              {el.title}
            </span>
            <button
              onClick={() => dispatch(delTODO(el))}
              type="button"
              class="text-white bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
      : ''
       }
        <nav
          className="flex items-center justify-between pt-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-10
            </span>{" "}
            of{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1000
            </span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default Todo;
