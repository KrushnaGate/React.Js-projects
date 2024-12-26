import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, Action) => {
  let newPostList = currPostList;
  if (Action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== Action.payload.postId
    );
  } else if (Action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={[postList, addPost, deletePost]}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to mumbai",
    body: "Hi friends,I am going to mumbai for my vaccation,Hope to enjoya lot.plece out.",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Going to pune",
    body: "Hi friends,I am going to mumbai for my vaccation,Hope to enjoya lot.plece out.",
    reactions: 15,
    userId: "user-2",
    tags: ["vacation", "pune", "Enjoying"],
  },
];

export default PostListProvider;
