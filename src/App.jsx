import { useState } from "react";
import { UsersList, PostsList, CommentsList } from "./components/FetchData.jsx";
import style from "./App.module.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  function renderUsers() {
    return (
      <>
        <h2>Users</h2>
        <div className={style.usersGrid}>
          <UsersList onSelectUser={setSelectedUser} />
        </div>
      </>
    );
  }

  function renderPosts() {
    return (
      <>
        <h2 style={{ marginBottom: "1rem" }}>
          Posts by: <strong>{selectedUser.name}</strong>
        </h2>
        <PostsList userId={selectedUser.id} onSelectPost={setSelectedPost} />
        <button onClick={() => setSelectedUser(null)}>Back to users</button>
      </>
    );
  }

  function renderComments() {
    return (
      <>
        <h2 style={{ marginBottom: "1rem" }}>
          Comments on: <strong>{selectedPost.title}</strong>
        </h2>
        <CommentsList postId={selectedPost.id} />
        <button onClick={() => setSelectedPost(null)}>Back to posts</button>
      </>
    );
  }

  function renderMain() {
    if (!selectedUser) return renderUsers();
    if (selectedUser && !selectedPost) return renderPosts();
    if (selectedUser && selectedPost) return renderComments();
  }

  return (
    <>
      <div className={style.app}>
        <div className={style.appBody}>
          <header>
            <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </header>
          <main>{renderMain()}</main>
          <footer>Made with React. Built with Vite.</footer>
        </div>
      </div>
    </>
  );
}

export default App;
