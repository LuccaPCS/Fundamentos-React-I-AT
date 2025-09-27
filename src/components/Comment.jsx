import style from "./Comment.module.css";

export default function Comment({ comment }) {
  return (
    <div className={style.commentCard}>
      <h3 className={style.commentAuthor}>{comment.author}</h3>
      <p className={style.commentBody}>{comment.body}</p>
    </div>
  );
}
