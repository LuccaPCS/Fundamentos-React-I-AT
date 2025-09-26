import style from "./User.module.css";

export default function User({ user, onClick }) {
  return (
    <div className={style.userCard} onClick={onClick}>
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
