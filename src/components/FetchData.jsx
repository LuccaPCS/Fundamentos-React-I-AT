import { useEffect, useState } from "react";
import User from "./User.jsx";
import Post from "./Post.jsx";
import Comment from "./Comment.jsx";

/* USERS */
export function UsersList({ onSelectUser }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const responseJson = await response.json();
        setUsers(responseJson);
      } catch (error) {
        setError(error);
      }
    }
    fetchUsers();
  }, []);

  if (error) {
    return <>Error: {error.message}</>;
  }

  if (users.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} onClick={() => onSelectUser(user)} />
      ))}
    </>
  );
}

/* POSTS */
export function PostsList({ userId, onSelectPost }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const responseJson = await response.json();
        setPosts(responseJson);
      } catch (error) {
        setError(error);
      }
    }
    fetchPosts();
  }, [userId]);

  if (error) {
    return <>Error: {error.message}</>;
  }

  if (posts.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} onClick={() => onSelectPost(post)} />
      ))}
    </>
  );
}

/* COMMENTS */
export function CommentsList({ postId }) {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
        );
        if (!response.ok) {
          throw new Error("Network response not ok");
        }
        const responseJson = await response.json();
        setComments(responseJson);
      } catch (error) {
        setError(error);
      }
    }
    fetchComments();
  }, [postId]);

  if (error) {
    return <>Error: {error.message}</>;
  }

  if (comments.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}
