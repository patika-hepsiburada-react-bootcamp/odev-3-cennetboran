import { useState } from "react";
import { useVote } from "../context/VoteContext";
import "../App.css";
import { sendVote } from "../SocketApi";
function VoteList() {
  const [answer, setAnswer] = useState("");
  const { setVote } = useVote();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!answer) {
      return false;
    }
    setVote((preview) => ({ ...preview, [answer]: preview[answer] + 1 }));
    sendVote("new-vote", answer);
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
                  value="brakingbad"
                  name="brakingbad"
                  checked={answer === "brakingbad"}
                  readOnly
                />
                <span>Breaking Bad</span>
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
                  value="dexter"
                  name="dexter"
                  checked={answer === "dexter"}
                  readOnly
                />
                <span>Dexter</span>
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
                  value="hmym"
                  name="hmym"
                  checked={answer === "hmym"}
                  readOnly
                />
                <span>How I Met Your Mother</span>
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
                  value="bbt"
                  name="bbt"
                  checked={answer === "bbt"}
                  readOnly
                />
                <span>The Big Bang Theory</span>
              </label>
            </div>
          </div>
          <div className="blur_back bright_back"></div>
        </div>
        {/* card 4 end */}
        {/* tetz */}
        {/* <input
          type="radio"
          value="brakingbad"
          name="brakingbad"
          checked={answer === "brakingbad"}
          readOnly
        />
        Breaking Bad */}
        {/* <input
          type="radio"
          value="dexter"
          name="dexter"
          checked={answer === "dexter"}
          readOnly
        />
        Dexter */}
        {/* <input
          type="radio"
          value="hmym"
          name="hmym"
          checked={answer === "hmym"}
          readOnly
        />
        How I met your mother */}
        {/* <input
          type="radio"
          value="bbt"
          name="bbt"
          checked={answer === "bbt"}
          readOnly
        />
        The Big Bang Theory */}
        {/* <input
          type="radio"
          value="ahs"
          name="ahs"
          checked={answer === "ahs"}
          readOnly
        />{" "}
        American Horror Story */}
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
