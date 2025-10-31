import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import '../styles/components/StatsChart.css';

ChartJS.register(ArcElement, CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function StatsChart() {
  const { events } = useContext(EventContext);

  const chartColors = [
    "#E63946",
    "#F3722C",
    "#F9C74F",
    "#90BE6D",
    "#43AA8B",
    "#577590",
    "#4D908E",
    "#B56576",
    "#9A031E",
    "#FB8500",
    "#3A86FF",
    "#8338EC"
  ];

  const counts = events.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const eventsCategoryByCities = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Répartition des événements par catégorie",
        data: Object.values(counts),
        backgroundColor: chartColors,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Pie data={eventsCategoryByCities} options={options} />;
}
