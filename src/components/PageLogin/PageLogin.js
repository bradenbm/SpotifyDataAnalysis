import React from "react";
import './PageLogin.css';

const CLIENT_ID = "a7985e3081a84e6b8352e8d877e8c375"; // insert your client id here from spotify
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URL_AFTER_LOGIN = "http://localhost:3000/profile";
const SPACE_DELIMITER = "%20";
const SCOPES = [
  "user-read-currently-playing",
  "user-read-playback-state",
  "playlist-read-private",
  "user-top-read"
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);



const PageLogin = () => {

    const handleLogin = () => {
        window.location = `${SPOTIFY_AUTHORIZE_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL_AFTER_LOGIN}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true`;
    };
    
    return (
        <div className="Login">
            <h1>Spotify Data Visualizer</h1>
            <p>Login to Spotify to continue.</p>
            <button className="button" onClick={handleLogin}>Login</button> <br/>
        </div>
    );
};

export default PageLogin;