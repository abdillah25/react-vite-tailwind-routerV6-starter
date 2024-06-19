export const savePosts = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("posts", serializedState);
  } catch (error) {
    console.error("error during save posts to local storage", error);
  }
};

export const loadPostFromLocal = () => {
  try {
    const serializedState = localStorage.getItem("posts");
    if (serializedState === null) return undefined;

    return JSON.parse(serializedState);
  } catch (error) {
    console.error("error during load state from local storage", error);
    return undefined;
  }
};
