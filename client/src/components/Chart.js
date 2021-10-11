import { useVote } from "../context/VoteContext";
import "../App.css";
import { Bar, PolarArea } from "react-chartjs-2";

function Chart() {
  const { voteData } = useVote();

  return (
    <div className="chart-container">
      <div style={{ width: "50%" }}>
        <PolarArea
          data={voteData}
          options={{
            responsive: true,
            title: { text: "Favorite Film", display: true },
            backgroundColor: "rgba(176 27 27 / 10%)",
            borderColor: "#fff",
          }}
        />
      </div>
    </div>
  );
}
export default Chart;
