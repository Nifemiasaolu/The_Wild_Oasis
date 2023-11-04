import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import { HiOutlineBanknotes, HiOutlineBriefcase, HiOutlineCalendarDays, HiOutlineChartBar } from "react-icons/hi2";

function Stats({ bookings, confirmedStays }) {
  // 1. number of booking
  const numBookings = bookings.length;

  // 2. Sales
  const sales = bookings.reduce((acc,cur) => acc + cur.totalPrice, 0);

  // 3. Checkins
  const checkins = confirmedStays.length;

  



  return (
    <>
  <Stat
    title="Bookings"
    color="blue"
    icon={<HiOutlineBriefcase />}
    value={numBookings}
  />
  <Stat
    title="Sales"
    color="green"
    icon={<HiOutlineBanknotes />}
    value={formatCurrency(sales)}
  />
  <Stat
    title="Check ins"
    color="indigo"
    icon={<HiOutlineCalendarDays />}
    value={checkins}
  />
  <Stat
    title="Occupancy rate"
    color="yellow"
    icon={<HiOutlineChartBar />}
    value={numBookings}
  />
    </>
  );
}

export default Stats;
