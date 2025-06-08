import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

function Post({ post }) {
   const { deletePost } = useContext(PostList);
   return (
      <div className="card post-card" style={{ width: "30rem" }}>
         <div className="card-body">
            <h5 className="card-title">
               {post.title}

               <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
                  pnclick={() => deletePost(post.id)}
               >
                  <AiFillDelete />
               </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map((tag) => (
               <span className="badge bg-primary hashtag" key={tag}>
                  {tag}
               </span>
            ))}
            <div className="alert alert-success reaction" role="alert">
               This post is reactred by {post.reactions} people
            </div>
         </div>
      </div>
   );
}

export default Post;
