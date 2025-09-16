import OrdersTable from "../components/Tables/OrdersTable";
import ProductsTable from "../components/Tables/ProductsTable";
import BarChart from "../components/wedgets/BarChart";
import DoughnutChart from "../components/wedgets/DoughnutChart";
import RadarChart from "../components/wedgets/RadarChart";
import WedgetsCard from "../components/wedgets/WedgetsCard";

function DashboardPage() {
  return (
    <div className="dashboardpage">
      <div className="wedgetcomp">
        <WedgetsCard />
        <WedgetsCard />
        <WedgetsCard />
        <WedgetsCard />
      </div>
      <div className="chartsComp">
        <BarChart />
        <div className="charts">
          <DoughnutChart />
          <RadarChart />
        </div>
      </div>
      <div className="DashboardTableComp">
        <OrdersTable />
        <ProductsTable />
      </div>
    </div>
  );
}

export default DashboardPage;
