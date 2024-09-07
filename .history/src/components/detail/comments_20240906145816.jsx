import React from "react";

const Comments = () => {
    const [comments, setComments] = useState([
        {
          id: 1,
          user: "匿名(1号)",
          comment: "看完瓜了，这种算相互暴力...",
          likes: 0,
        },
        {
          id: 2,
          user: "匿名(2号)",
          comment: "要他删又不删，笑死我了...",
          likes: 0,
        },
      ]);
    
      const [newComment, setNewComment] = useState("");
    
      const handleLike = (id) => {
        const updatedComments = comments.map((comment) =>
          comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment
        );
        setComments(updatedComments);
      };
  return <div></div>;
};
export default Comments;
