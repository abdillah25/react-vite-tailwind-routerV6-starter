import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../features/posts/posts-slice";
import usersSlice from "../features/users/users-slice";
import { loadPostFromLocal, savePosts } from "../util/local-storage";

export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
  },

  preloadedState: {
    posts: loadPostFromLocal(),
  },
});

store.subscribe(() => {
  savePosts(store.getState().posts);
});
