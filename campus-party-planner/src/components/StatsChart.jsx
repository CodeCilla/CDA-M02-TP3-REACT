import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function StatsChart() {
  const { events } = useContext(EventContext);

  const counts = events.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Répartition des événements",
        data: Object.values(counts),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
      },
    ],
  };

  const placeholderData = {
    labels: ["À venir"],
    datasets: [
      {
        label: "Graph Placeholder",
        data: [1],
        backgroundColor: ["#999999"],
      },
    ],
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      <div style={{ width: "40%", minWidth: "300px" }}>
        <Pie data={data} />
      </div>
      <div style={{ width: "40%", minWidth: "300px", opacity: 0.4 }}>
        <Bar data={placeholderData} />
      </div>
    </div>
  );
}
