import { FETCH_COMMENT, FETCH_POST, FETCH_TODO, FETCH_USER } from "../constant";


export const fetchPost = (data) => {   
  return{
    type:FETCH_POST
  }
};
export const fetchComment = (data) => {   
  return{
    type:FETCH_COMMENT
  }
};
export const fetchUser = (data) => {   
  return{
    type:FETCH_USER
  }
};
export const fetchTodo = (data) => {   
  return{
    type:FETCH_TODO
  }
};
