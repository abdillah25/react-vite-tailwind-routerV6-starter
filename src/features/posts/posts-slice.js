import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
  {
    id: nanoid(),
    title: "learning redux toolkit",
    content: "I've heard good things",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      star: 0,
      crying: 0,
      heartEyes: 0,
      heart: 0,
      gift: 0,
    },
  },
  {
    id: nanoid(),
    title: "slices...",
    content: "The more I say slice, the more I want pizza",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      star: 0,
      crying: 0,
      heartEyes: 0,
      heart: 0,
      gift: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, actions) {
        state.push(actions.payload);
        // you can add logic state here (filtering, adding, etc.)
      },

      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              star: 0,
              crying: 0,
              heartEyes: 0,
              heart: 0,
              gift: 0,
            },
          },
        };
      },
    },

    reactionAdded: {
      reducer: (state, actions) => {
        const { postId, reactions } = actions.payload;
        const existingPost = state.find((post) => post.id === postId);

        if (existingPost) existingPost.reactions[reactions]++;
      },
      prepare: (postId, reactions) => {
        return {
          payload: {
            postId,
            reactions,
          },
        };
      },
    },
  },
});

export const selectAllPost = (state) => state.posts; // export all post state

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
