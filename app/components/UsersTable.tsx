// This is a Server Component by default.
// ..because we don't say 'use client'; here

import { SignalIcon } from "@heroicons/react/24/outline";
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Badge,
} from "@tremor/react";

// Interface (add TS types to `users`)
// The definitions here match the JSON fields for users from
// https://jsonplaceholder.typicode.com/users
interface User {
  id: number;
  name: string;
  email: string;
  website: string;
  username: string;
}

// This component must be async because we're using fetch().
export default async function UsersTable() {
  // In a Server Component, we can use fetch().
  const users: User[] = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" }
  ).then((response) => response.json());

  return (
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
          <TableHeaderCell>Website</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.name}</TableCell>
            <TableCell>
              <Text>{user.email}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.website}</Text>
            </TableCell>
            <TableCell>
              <Text>{user.username}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
