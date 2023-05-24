import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchComment,
  fetchPost,
  fetchTodo,
  fetchUser,
} from "../redux/action/fetchApi";

const FetchPost = () => {
  const dispatch = useDispatch();

  const userPost = useSelector((state) => state?.getUserDataReducer?.postData);
  const userComment = useSelector((state) => state?.getUserDataReducer?.commentData);
  const userTodo = useSelector((state) => state?.getUserDataReducer?.todoData);
  const userData = useSelector((state) => state?.getUserDataReducer?.userData);

  console.log(userPost, "i am user ui data");
  console.log(userComment, "i am user comment data");
  console.log(userTodo, "i am user ui todo data");
  console.log(userData, "i am user ui uxcdfdfser data");

  return (
    <>
      <div style={{ margin: 50 }}>
        <button onClick={() => dispatch(fetchPost())}>Get Posts</button> &nbsp;
        <button onClick={() => dispatch(fetchComment())}>Get Comments</button>
        &nbsp;
        <button onClick={() => dispatch(fetchUser())}>Get Users</button> &nbsp;
        <button onClick={() => dispatch(fetchTodo())}>Get Todos</button> &nbsp;
      </div>

      {userPost.map((item) => {
        return (
          <>
            <p>{item.title}</p>
          </>
        );
      })}

      {userComment.map((item) => {
        return (
          <>
            <p>{item.name}</p>
          </>
        );
      })}

      {userData.map((item) => {
        return (
          <>
            <p>{item.name}</p>
          </>
        );
      })}

      {userTodo.map((item) => {
        return (
          <>
            <p>{item.title}</p>
          </>
        );
      })}
    </>
  );
};

export default FetchPost;
