import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import User from "./User";
import { RoutePaths } from "@/constants/RouteConstants";

jest.mock(
  "@/common/Suspense",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      <div>{children}</div>
);
jest.mock("./UserList", () => () => <div>User List</div>);
jest.mock("./UserDetails", () => () => <div>User Details</div>);

describe("User Component", () => {
  test("renders UserDetails component for /users/details path", async () => {
    render(
      <MemoryRouter initialEntries={[RoutePaths.USERS_DETAILS]}>
        <User />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("User Details")).toBeInTheDocument();
    });
  });
});
