import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "이규형",
    comment: "대충 살자",
  },
  {
    name: "이수진",
    comment: "수영 나보다 잘하는 사람있으면 나와보라 그래",
  },
  {
    name: "이기준",
    comment: "내가 바로 이 구역 미친놈",
  },
  {
    name: "김기호",
    comment: "내가 더 미친놈임",
  },
  {
    name: "장혜진",
    comment: "내가 대장이다",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((c) => {
        return <Comment name={c.name} comment={c.comment} />;
      })}
    </div>
  );
}
export default CommentList;
