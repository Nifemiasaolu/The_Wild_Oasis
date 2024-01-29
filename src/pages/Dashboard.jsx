import DashboardFilter from "../features/dashboard/DashboardFilter";
import DashboardLayout from "../features/dashboard/DashboardLayout";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { Section } from "../styles/GlobalStyles";

function Dashboard() {
  return (
    <>
    <Section smpadding="0">

      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter/>
      </Row>

      <DashboardLayout />
    </Section>
    </>
  );
}

export default Dashboard;
// //