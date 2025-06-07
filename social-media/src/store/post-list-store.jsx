import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
   postList: [],
   addPost: () => {},
   deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
   return currPostList;
};

const PostListProvider = ({ children }) => {
   const [postList, dispatchPostList] = useReducer(
      postListReducer,
      DEFAULT_POST_LIST
   );

   const addPost = () => {};

   const deletePost = () => {};
   return (
      <PostList.Provider value={{ postList, addPost, deletePost }}>
         {children}
      </PostList.Provider>
   );
};

const DEFAULT_POST_LIST = [
   {
      id: 1,
      title: "First Post",
      body: "This is the body of the first post halilulia.",
      reactions: 2,
      userID: "user-9",
      tags: ["react", "javascript"],
   },
   {
      id: 2,
      title: "Second Post",
      body: "This is the body of the second post.",
      reactions: 5,
      userID: "user-10",
      tags: ["vue", "javascript"],
   },
];

export default PostListProvider;
