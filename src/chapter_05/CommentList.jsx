import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name="이규형" comment="제가 만든 첫 컴포넌트"/>
      <Comment name="이수진" comment="나는야 수영짱"/>
      <Comment name="이기준" comment="나는야 이기준"/>
    </div>
  );
}
export default CommentList;