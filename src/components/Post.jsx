import style from "./Post.module.css";

export default function Post({ post, onClick }) {
  return (
    <div className={style.postCard} onClick={onClick}>
      <h3 className={style.postTitle}>{post.title}</h3>
      <p className={style.postBody}>{post.body}</p>
    </div>
  );
}
