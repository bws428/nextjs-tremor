import { Title } from "@tremor/react";
import UsersTable from "../components/UsersTable";

export default function UsersPage() {
  return (
    <>
      <Title>List of Users</Title>
      {/* @ts-expect-error Server Component */}
      <UsersTable />
    </>
  );
}
