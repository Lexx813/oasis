import Table from "../../ui/Table";
import styled from "styled-components";

const Name = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Email = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
function BookingRow({ users }) {
  const { email } = users;
  const { fullName } = users.user_metadata;

  return (
    <Table.Row>
      <Name>{fullName}</Name>
      <Emai>{email}</Email>
    </Table.Row>
  );
}

export default BookingRow;
