import style from "./User.module.css";

export default function User({ user, onClick, viewMode }) {
  return (
    <div
      className={`${style.userCard} ${
        viewMode === "list" ? style.stretch : ""
      }`}
      onClick={onClick}
    >
      <h3>{user.name}</h3>
      <p>
        <strong>Username: </strong>
        {user.username}
      </p>
      <p>
        <strong>City: </strong>
        {user.address.city}
      </p>
      <p>
        <strong>Company: </strong>
        {user.company.name}
      </p>
      <p>{user.company.catchPhrase}</p>
    </div>
  );
}
