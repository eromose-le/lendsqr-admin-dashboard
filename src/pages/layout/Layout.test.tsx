import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { ProtectRoutesLayout } from "./layout";
import { Sidebar } from "@/components/sidbar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

// Mock components to be used in tests
jest.mock("@/components/navbar/Navbar", () => () => <Navbar />);
jest.mock("@/components/sidbar/Sidebar", () => () => <Sidebar />);

describe("ProtectRoutesLayout", () => {
  test("does not render Navbar and Sidebar for public routes", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<div>Login Page</div>} />
          <Route path="/" element={<ProtectRoutesLayout />}>
            <Route path="dashboard" element={<div>Dashboard Content</div>} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText("Mock Navbar")).not.toBeInTheDocument();
    expect(screen.queryByText("Mock Sidebar")).not.toBeInTheDocument();
  });
});
