import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

function Card(props) {
  const [isMember, setIsMember] = useState(false);
  const { user } = useContext(UserContext);
  console.log("here is the user", user);
  const handleJoin = () => {};
  return (
    <div className="my-card">
      <Link to={props.link}>
        <div className="container">
          <img className="image" src={props.imgUrl} alt={props.title} />
          <div className="overlay">
            <h3>{props.title}</h3>
            <p className="card-desc">{props.desc}</p>
            {user &&
              (user[`${props.attribute}`].includes(props.cardId) ? (
                <button
                  className="secondary-button"
                  style={{ marginBottom: "10px" }}
                >
                  Leave {props.type}
                </button>
              ) : (
                <button style={{ marginBottom: "10px" }}>
                  Join {props.type}
                </button>
              ))}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
