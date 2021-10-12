import { useEffect } from "react";
import { useVote } from "../context/VoteContext";
import { connectSocket, subscribeToNewVotes } from "../SocketApi";
import VoteList from "../components/VoteList";
import Questions from "./Questions";
import Chart from "./Chart";
import "../App.css";

function Container() {
  const { setVote } = useVote();

  useEffect(() => {
    //connect to backend socket
    connectSocket();
    //get data when votes updated
    subscribeToNewVotes((vote) => {
      setVote(vote);
    });
  }, [setVote]);

  return (
    <div className="container">
      <Questions />
      <VoteList />
      <Chart />
    </div>
  );
}

export default Container;
