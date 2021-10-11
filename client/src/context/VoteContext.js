import { createContext, useState, useEffect, useContext } from "react";

const VoteContext = createContext();

const INITIALVOTES = {
  bright: 0,
  tombRaider: 0,
  blackPanther: 0,
  thePlatform: 0,
  ahs: 0,
};

export const VoteProvider = ({ children }) => {
  const [vote, setVote] = useState(INITIALVOTES);
  const [totalVote, setTotalVote] = useState(0);

  const [voteData, setVoteData] = useState({
    labels: ["Bright", "Tomb Raider", "Black Panther", "The Platform"],
    datasets: [
      {
        label: "% of Votes",
        data: [
          totalVote > 0 ? (vote.bright / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.tombRaider / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.blackPanther / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.thePlatform / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.ahs / totalVote) * 100 : 0,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    setTotalVote(
      vote.bright +
        vote.tombRaider +
        vote.blackPanther +
        vote.thePlatform +
        vote.ahs
    );

    let _totalVote =
      vote.bright +
      vote.tombRaider +
      vote.blackPanther +
      vote.thePlatform +
      vote.ahs;
    setVoteData((preview) => ({
      ...preview,
      datasets: [
        ...preview.datasets,
        {
          ...preview.datasets[0],
          data: [
            _totalVote > 0 ? (vote.bright / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.tombRaider / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.blackPanther / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.thePlatform / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.ahs / _totalVote) * 100 : 0,
          ],
        },
      ],
    }));
  }, [vote]);
  const values = {
    vote,
    setVote,
    voteData,
  };

  return <VoteContext.Provider value={values}>{children}</VoteContext.Provider>;
};

export const useVote = () => useContext(VoteContext);
