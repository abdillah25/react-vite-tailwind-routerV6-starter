import { useSelector } from "react-redux";
import { selectAllPost } from "./posts-slice";
import PostAuthor from "./post-author";
import TimeAgo from "./time-ago";
import ReactionList from "./reaction-list";

const PostList = () => {
  const posts = useSelector(selectAllPost); // get and call global post state

  console.log(posts);

  const renderedPost = posts.map((post) => (
    <article key={post.id} className="w-[500px] border-white border-2 p-5 rounded-lg my-4">
      <h3 className="text-2xl font-mono">{post.title}</h3>
      <p className="font-mono text-base mb-5">{post.content.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo timeStamp={post.date} />
      <ReactionList postId={post.id} />
    </article>
  ));

  return (
    <section className=" text-white p-5">
      <h2 className="text-4xl capitalize font-mono font-bold">post</h2>
      {renderedPost}
    </section>
  );
};

export default PostList;
