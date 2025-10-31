import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import '../styles/components/StatsChart.css';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function LikesChart() {
  const { events } = useContext(EventContext);
  const likedEventIds = JSON.parse(localStorage.getItem("likedEvents") || "[]");

const chartColors = [
  "#E63946", // strong red
  "#F3722C", // vivid orange
  "#F9C74F", // bright yellow
  "#90BE6D", // fresh green
  "#43AA8B", // teal
  "#577590", // blue
  "#4D908E", // muted cyan
  "#B56576", // dusty rose / mauve
  "#9A031E", // deep crimson
  "#FB8500", // bold amber
  "#3A86FF", // vibrant blue
  "#8338EC"  // purple
];


const likeCounts = events.reduce((acc, { category, id }) => {
  if (likedEventIds.includes(id)) {
    acc[category] = (acc[category] || 0) + 1;
  }
  return acc;
}, {});


  const likeByCategory = {
    labels: Object.keys(likeCounts),
    datasets: [
      {
        label: "Événements likés par catégorie",
        data: Object.values(likeCounts),
        backgroundColor: chartColors
      },
    ],
  };

  return (
    <Pie data={likeByCategory} />
  );
}
