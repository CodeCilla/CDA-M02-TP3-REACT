import { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function StatsChart() {
  const { events } = useContext(EventContext);   // READ-ONLY

  const counts = events.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return (
    <Bar
      data={{
        labels: Object.keys(counts),
        datasets: [{
          label: "Nombre d'événements",
          data: Object.values(counts),
          backgroundColor: '#2f8ea3'
        }]
      }}
    />
  );
}