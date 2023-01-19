import React from "react";
import { useEffect, useState } from "react";
import "../public/styles/dataUser.css";
function DataUser(props) {
  const [user, setUser] = useState();

  const searchUserGithub = async () => {
    try {
      const API_URL = `https://api.github.com/users/${props.username}`;
      console.log(props);

      const dataAPI = await fetch(API_URL);
      const responseDataJSON = await dataAPI.json();

      // update data user
      setUser(responseDataJSON);

      console.log(responseDataJSON);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    searchUserGithub();
  }, []);

  return (
    <div className="contentDataUser">
      <p>resultado:</p>
      {user ? <p>{user.login}</p> : "loading..."}
      {user ? <img src={user.avatar_url} alt="image profile" /> : "loading image"}
    </div>
  );
}

export default DataUser;
