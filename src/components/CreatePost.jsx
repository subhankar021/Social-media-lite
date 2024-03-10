import { useContext } from "react";
import { useRef } from "react";
import {PostList} from "../store/post-list-store"

const CreatePost =()=> {

    const{ addPost }= useContext(PostList);
    const userIdElement = useRef();
    const postTitleElement = useRef();
    const postbodyElement = useRef();
    const reactionsElement = useRef();
    const tagsElement= useRef();
    const handlesubmit = (event) => {
      event.preventDefault();
      const userId = userIdElement.current.value;
      const postTitle = postTitleElement.current.value;
      const postbody = postbodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(" ");
      addPost(userId,postTitle,postbody,reactions,tags)

      userIdElement.current.value = "";
      postTitleElement.current.value="";
      postbodyElement.current.value="";
      reactionsElement.current.value="";
      tagsElement.current.value = "";
    };

  return(
    <form className="create-post" onSubmit={handlesubmit}>
      
  <div class="mb-3">
    <label for="title" class="form-label">UserId</label>
    <input type="userId" ref={userIdElement} class="form-control" id="userId" placeholder="How are you feeling today..." />
  </div>   
  <div class="mb-3">
    <label for="title" class="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} class="form-control" id="title" placeholder="How are you feeling today..." />
  </div>
  <div class="mb-3">
    <label for="body" class="form-label">Post Content</label>
    <textarea
    type="text" ref={postbodyElement} rows= "4"
    class="form-control" id="postbody" placeholder="Tell us more about it.." />
  </div>
  <div class="mb-3">
    <label for="reactiosn" class="form-label">Reactions</label>
    <input type="text" ref={reactionsElement} class="form-control" id="reactions" placeholder="Number of people react to the post" />
  </div>
  <div class="mb-3">
    <label for="tags" class="form-label">Hashtags</label>
    <input type="text" ref={tagsElement} class="form-control" id="tags" placeholder="please enetr tags using space" />
  </div>
  
  <button type="submit" class="btn btn-primary">Post</button>
</form>
  );
  };


export default CreatePost;