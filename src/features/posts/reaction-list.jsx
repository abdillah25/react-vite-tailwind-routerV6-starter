import { useDispatch, useSelector } from "react-redux";
import { reactionAdded, selectAllPost } from "./posts-slice";
import PropTypes from "prop-types";

const ReactionList = ({ postId }) => {
  const dispatch = useDispatch();
  const postReactionsData = useSelector(selectAllPost).find((post) => post.id === postId).reactions;

  const reactions = [
    { name: "star", emoji: "🌟" },
    { name: "crying", emoji: "😭" },
    { name: "heartEyes", emoji: "😍" },
    { name: "heart", emoji: "❤️" },
    { name: "gift", emoji: "🎁" },
  ];

  const handleClick = (name) => dispatch(reactionAdded(postId, name));

  const rectionsList = reactions.map((react) => (
    <span className="border px-4 py-1 rounded-lg" onClick={() => handleClick(react.name)} key={react.name}>
      {react.emoji}
      {postReactionsData[react.name]}
    </span>
  ));

  return <div className="w-full mt-3 flex gap-x-3">{rectionsList}</div>;
};

export default ReactionList;

ReactionList.propTypes = {
  postId: PropTypes.string,
};
