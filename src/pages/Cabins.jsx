import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import styled from "styled-components";

const MobileRow = styled(Row)`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`


function Cabins() {
  return (
    <>
      <MobileRow type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </MobileRow>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
// //