import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./posts-slice";
import { selectAllUsers } from "../users/users-slice";

const AddPostForm = () => {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const users = useSelector(selectAllUsers);

  const isCanAddPost = Boolean(formValue.content) && Boolean(formValue.title) && Boolean(formValue.userId);

  console.log(formValue);

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formValue.content && formValue.title) {
      dispatch(postAdded(formValue.title, formValue.content, parseInt(formValue.userId, 0)));
      //   reset local component state  after submit
      setFormValue({
        title: "",
        content: "",
        userId: "",
      });
    }
  };

  const userOptions = users.map((user) => (
    <option value={user.id} key={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="text-white p-5 ">
      <h2 className="text-4xl capitalize font-mono font-bold mb-3">add a new post</h2>

      <form onSubmit={handleSubmit} className="w-[500px] border-2 border-white rounded-lg p-5">
        <label htmlFor="post-title" className="capitalize font-mono">
          <h4>post title:</h4>
        </label>
        <input
          value={formValue.title || ""}
          name="title"
          type="text"
          onChange={handleChange}
          id="post-title"
          className="w-full p-2 rounded-md font-mono mb-3  text-black"
        />
        <label htmlFor="post-author" className="capitalize font-mono">
          <h4>post author:</h4>
        </label>

        <select name="userId" className="p-2 w-full text-black font-mono" id="post-author" onChange={handleChange}>
          {userOptions}
        </select>

        <label htmlFor="post-author" className="capitalize font-mono">
          <h4>post content:</h4>
        </label>
        <textarea
          value={formValue.content || ""}
          name="content"
          id="post-content"
          onChange={handleChange}
          className="w-full min-h-[100px] text-black font-mono p-2 rounded-md"
        />
        <button
          disabled={!isCanAddPost}
          type="submit"
          className="w-full mt-3 disabled:cursor-not-allowed  rounded-md capitalize font-mono text-lg p-3 border-2 flex justify-center items-center text-center text-white"
        >
          save post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
