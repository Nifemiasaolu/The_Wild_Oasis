import styled from 'styled-components';

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export default TableOperations;
