/* 
  For displaying which film to vote and send to backend
*/

import { useState } from "react";
import { useVote } from "../context/VoteContext";
import "../App.css";
import { sendVote } from "../SocketApi";
function VoteList() {
  const [answer, setAnswer] = useState("");
  const { setVote,vote } = useVote();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answer) {
      return false;
    }
    //on new vote event, make requet to socket
    sendVote("new-vote", answer);
    //set votes
    setVote({...vote});
  };
  return (
    <div>
      <div
        onChange={({ target: { value } }) => setAnswer(value)}
        className="vote-options"
      >
        {/* card 1 start */}
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
              alt="..."
                className="locandina"
                src="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
              />
              <h1>Bright</h1>
              <h4>2017, David Ayer</h4>
              <span className="minutes">117 min</span>
              <p className="type">Action, Crime, Fantasy</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                Set in a world where fantasy creatures live side by side with
                humans. A human cop is forced to work with an Orc to find a
                weapon everyone is prepared to kill for.
              </p>
            </div>
            <div className="movie_social">
              <label className="l-radio">
                <input
                  type="radio"
                  value="bright"
                  name="bright"
                  checked={answer === "bright"}
                  readOnly
                />
                <span>Bright</span>
              </label>
            </div>
          </div>
          <div className="blur_back bright_back"></div>
        </div>
        {/* card 1 end */}
        {/* card 2 start */}
        <div className="movie_card" id="tomb">
          <div className="info_section">
            <div className="movie_header">
              <img
              alt="..."
                className="locandina"
                src="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
              />
              <h1>Tomb Raider</h1>
              <h4>2018, Roar Uthaug</h4>
              <span className="minutes">125 min</span>
              <p className="type">Action, Fantasy</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                Lara Croft, the fiercely independent daughter of a missing
                adventurer, must push herself beyond her limits when she finds
                herself on the island where her father disappeared.
              </p>
            </div>
            <div className="movie_social">
              <label className="l-radio">
                <input
                  type="radio"
                  value="tombRaider"
                  name="tombRaider"
                  checked={answer === "tombRaider"}
                  readOnly
                />
                <span>Tomb Raider</span>
              </label>
            </div>
          </div>
          <div className="blur_back tomb_back"></div>
        </div>
        {/* card 2 end */}
        {/* card 3 start */}
        <div className="movie_card" id="ave">
          <div className="info_section">
            <div className="movie_header">
              <img
              alt="..."
                className="locandina"
                src="https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg"
              />
              <h1>Black Panther</h1>
              <h4>2018, Ryan Coogler</h4>
              <span className="minutes">134 min</span>
              <p className="type">Action, Adventure, Sci-Fi</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                T'Challa, the King of Wakanda, rises to the throne in the
                isolated, technologically advanced African nation, but his claim
                is challenged by a vengeful outsider who was a childhood victim
                of T'Challa's father's mistake.
              </p>
            </div>
            <div className="movie_social">
              <label className="l-radio">
                <input
                  type="radio"
                  value="blackPanther"
                  name="blackPanther"
                  checked={answer === "blackPanther"}
                  readOnly
                />
                <span>Black Panther</span>
              </label>
            </div>
          </div>
          <div className="blur_back ave_back"></div>
        </div>
        {/* card 3 end */}
        {/* card 4 start */}
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
                alt="..."
                className="locandina"
                src="https://www.indyturk.com/sites/default/files/styles/800xauto/public/thumbnails/image/2020/04/13/339586-2113337681.jpg?itok=l3ZMw9-3"
              />
              <h1>The Platform</h1>
              <h4>2019, Galder Gaztelu-Urrutia</h4>
              <span className="minutes">94 min</span>
              <p className="type">Thriller/Sci-Fi</p>
            </div>
            <div className="movie_desc">
              <p className="text">
                A vertical prison with one cell per level. Two people per cell.
                Only one food platform and two minutes per day to feed. An
                endless nightmare trapped in The Hole.
              </p>
            </div>
            <div className="movie_social">
              <label className="l-radio">
                <input
                  type="radio"
                  value="thePlatform"
                  name="thePlatform"
                  checked={answer === "thePlatform"}
                  readOnly
                />
                <span>The Platform</span>
              </label>
            </div>
          </div>
          <div className="blur_back platform_back"></div>
        </div>
      </div>
      <div className="vote-options1">
        <button onClick={handleSubmit} className="vote-button1">
          Vote
        </button>
      </div>
    </div>
  );
}

export default VoteList;
