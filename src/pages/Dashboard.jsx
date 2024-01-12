import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboadrLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";

function Dashboard() {
  return (
    <>
      <Row type='horizontal'>
        <Heading as='h1'>Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboadrLayout />
    </>
  );
}

export default Dashboard;
