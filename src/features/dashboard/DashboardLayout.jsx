import styled from "styled-components";
import { useRecentBookings } from "./feature-hooks/useRecentBookings";
import { useRecentStays } from "./feature-hooks/useRecentStays";
import useCabinsData from "../cabins/feature-hooks/useCabinsData";
import Spinner from "../../ui/Spinner";
import Stats from "./Stats";
import { useSearchParams } from "react-router-dom";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const [searchParams] = useSearchParams();
  const { bookings, numDays, isLoading: isLoading1 } = useRecentBookings();
  const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabinsData();

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  console.log(bookings);

  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      ></Stats>
      <div>Today&apos;s activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
