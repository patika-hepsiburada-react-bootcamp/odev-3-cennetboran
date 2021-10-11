import { useVote } from "../context/VoteContext";
import "../App.css";
import { Bar, PolarArea } from "react-chartjs-2";

function Chart() {
  const { voteData } = useVote();

  return (
    <div style={{ width: "70%" }}>
      <div style={{ width: "70%" }}>
        <PolarArea
          data={voteData}
          options={{
            responsive: true,
            title: { text: "Favorite Film", display: true },
          }}
        />
      </div>
    </div>
  );
}
export default Chart;
