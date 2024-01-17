import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const months = ["January", "February", "March", "April", "May", "June", "July"];

interface BarChartProps {
  horizontal?: boolean;
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  bg_color_1: string;
  bg_color_2: string;
  labels?: string[];
}

export const BarChart = ({
  data_1 = [],
  data_2 = [],
  title_1,
  title_2,
  bg_color_1,
  bg_color_2,
  horizontal = false,
  labels = months,
}: BarChartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
        y: {
            beginAtZero: true
        },
        x: {
            beginAtZero: true   
        }
    }
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: bg_color_1,
        barPercentage: 1,
        categoryPercentage: 0.4
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: bg_color_2,
        barPercentage: 1,
        categoryPercentage: 0.4
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};
