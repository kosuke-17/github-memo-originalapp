import LineGraph from "../components/templates/LineGraph";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import GraphCard from "../components/atoms/GraphCard";
Chart.register(CategoryScale);

const LineGraphPage: React.FC = () => {
  return (
    <GraphCard>
      <LineGraph />
    </GraphCard>
  );
};

export default LineGraphPage;
