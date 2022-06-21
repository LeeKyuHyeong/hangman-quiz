import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name : "이규형",
    comment : "실수란 신이 뭐시기뭐시기",
  },
  {
    name : "이수진",
    comment : "수영 나보다 잘하는 사람있으면 나와보라 그래",
  },
  {
    name : "이기준",
    comment : "내가 바로 이 구역 미친놈",
  },


];

function CommentList(props) {
  return (
    <div>
      {comments.map((c) => {
        return (
          <Comment name={c.name} comment={c.comment} />
        )
      })}
      {/* <Comment name="이규형" comment="제가 만든 첫 컴포넌트"/>
      <Comment name="이수진" comment="나는야 수영짱"/>
      <Comment name="이기준" comment="나는야 이기준"/> */}
    </div>
  );
}
export default CommentList;