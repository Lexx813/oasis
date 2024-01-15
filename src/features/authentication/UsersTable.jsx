import UsersRow from "./UsersRow";
import Table from "../../ui/Table";

import Empty from "../../ui/Empty";

import Spinner from "../../ui/Spinner";

import { useGetAlUsers } from "./useGetAllUsers";

function UsersTable() {
  const { users: allUsers, isLoading } = useGetAlUsers();

  if (isLoading) return <Spinner />;

  const users = allUsers.users;

  if (!users.length) return <Empty resourceName='users' />;
  return (
    <>
      <Table columns='0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem'>
        <Table.Header>
          <div> Name</div>
          <div>Email</div>

          <div></div>
        </Table.Header>

        <Table.Body
          data={users}
          render={users => <UsersRow key={users.id} users={users} />}
        />
      </Table>
      <Table.Footer></Table.Footer>
    </>
  );
}

export default UsersTable;
