import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
   postList: [],
   addPost: () => {},
   deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
   let newPostList = currPostList;
   if (action.type === "DELETE_POST") {
      newPostList = currPostList.filter(
         (post) => post.id !== action.payload.postId
      );
   } else if (action.type === "ADD_POST") {
      newPostList = [action.payload, ...currPostList];
   }
   return newPostList;
};

const PostListProvider = ({ children }) => {
   const [postList, dispatchPostList] = useReducer(
      postListReducer,
      DEFAULT_POST_LIST
   );

   const addPost = (postData) => {
      dispatchPostList({
         type: "ADD_POST",
         payload: {
            id: Date.now(),
            title: postData.title,
            body: postData.body,
            reactions: postData.reactions,
            userID: postData.userId,
            tags: postData.tags,
         },
      });
   };

   const deletePost = (postId) => {
      dispatchPostList({
         type: "DELETE_POST",
         payload: {
            postId: postId,
         },
      });
   };
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
