import c from "./users.module.css";

const User = (props) => {
    return (
        <div className={c.card}>
            <p>{props.name}</p>
            <p>{props.id}</p>
        </div>
    );
};

export default User;