import { createContext, useState, useEffect, useContext } from "react";

const VoteContext = createContext();

const INITIALVOTES = {
  brakingbad: 0,
  dexter: 0,
  hmym: 0,
  bbt: 0,
  ahs: 0,
};

export const VoteProvider = ({ children }) => {
  const [vote, setVote] = useState(
    INITIALVOTES
  );
  const [totalVote, setTotalVote] = useState(0);

  const [voteData, setVoteData] = useState({
    labels: ["breakingbad", "dexter", "hmym", "bbt", "ahs"],
    datasets: [
      {
        label: "% of Votes",
        data: [
          totalVote > 0 ? (vote.brakingbad / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.dexter / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.hmym / totalVote) * 100 : 0,
          totalVote > 0 ? (vote.bbt / totalVote) * 100 : 0,
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
      vote.brakingbad + vote.dexter + vote.hmym + vote.bbt + vote.ahs
    );

    let _totalVote =
      vote.brakingbad + vote.dexter + vote.hmym + vote.bbt + vote.ahs;
    setVoteData((preview) => ({
      ...preview,
      datasets: [
        ...preview.datasets,
        {
          ...preview.datasets[0],
          data: [
            _totalVote > 0 ? (vote.brakingbad / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.dexter / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.hmym / _totalVote) * 100 : 0,
            _totalVote > 0 ? (vote.bbt / _totalVote) * 100 : 0,
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
