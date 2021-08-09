import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={item.img} alt="" />
        </div>
        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>The actor / actress that portrayed the character:</strong> 
              {item.portrayed}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>List of seasons that the character appeared in:</strong> 
              {item.appearance}
            </li>
            <li>
              <strong>All quotes by the character:</strong> {item.quote}
            </li>
            <li>
              <strong>Series that the character is involved with.:</strong> 
              {item.category}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
