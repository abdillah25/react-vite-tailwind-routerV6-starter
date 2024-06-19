import AddPostForm from "./features/posts/add-post-form";
import PostList from "./features/posts/post-list";

function App() {
  return (
    <main className="w-full min-h-screen bg-black justify-center flex items-center flex-col">
      <PostList />
      <AddPostForm />
    </main>
  );
}

export default App;
