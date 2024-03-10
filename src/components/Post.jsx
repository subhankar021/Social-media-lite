import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as PostListData } from "../store/post-list-store";
const Post = ({post}) => {
  const {deletePost} = useContext(PostListData)
  return(
    <div class="card post-card" style={{width: "30rem"}}>
  
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)} >
    <MdDelete />
  </span>
    </h5>
    <p class="card-text">{post.body}</p>
    {post.tags.map((tag)=> <span key={tag} class="badge text-bg-primary hashtag">{tag}</span>)}
    <div className="alert alert-success reactions" role="alert">
  This post is liked by {post.reactions} people
</div>
    

  </div>
</div>
  );
}

export default Post;