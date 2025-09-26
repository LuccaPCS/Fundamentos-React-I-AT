import { useState } from "react";
import { PostsList } from "./components/FetchData.jsx";
import { UsersList } from "./components/FetchData.jsx";
import style from "./App.module.css";

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

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
        <h2 style={{ marginBottom: "1rem" }}>Posts by {selectedUser.name}</h2>
        <PostsList userId={selectedUser.id} />
        <button onClick={() => setSelectedUser(null)}>← Back to users</button>
      </>
    );
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
          <main>{selectedUser ? renderPosts() : renderUsers()}</main>
          <footer>Made with React. Built with Vite.</footer>
        </div>
      </div>
    </>
  );
}

export default App;
