import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Dashboard from "../dashboard/Dashboard";

describe("Login Component", () => {
  const setup = () => {
    return render(
      <MemoryRouter initialEntries={["/login"]}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>
    );
  };

    test("renders login form", () => {
      const { getByLabelText, getByRole } = setup();
      expect(getByLabelText(/Email/i)).toBeInTheDocument();
      expect(getByLabelText(/Password/i)).toBeInTheDocument();
      expect(getByRole("button", { name: /log in/i })).toBeInTheDocument();
    });

  test("renders logo, email, and password fields", () => {
    const { getByPlaceholderText, getByAltText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const logo = getByAltText("logo");
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");

    expect(logo).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const passwordInput = getByPlaceholderText("Password");
    const toggleButton = getByText("show");

    // Initially the password should be hidden
    expect(passwordInput).toHaveAttribute("type", "password");

    // Click to show the password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");

    // Click to hide the password again
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  test("navigates to dashboard on login button click", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const loginButton = getByText("log in");
    fireEvent.click(loginButton);
  });

  test("renders forgot password link", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const forgotPasswordLink = getByText("forgot password?");
    expect(forgotPasswordLink).toBeInTheDocument();
  });

  test("email input should not accept invalid email format", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByPlaceholderText("Email") as HTMLInputElement;
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });

    expect(emailInput.value).toBe("invalid-email"); // This is to ensure the value was typed

    // Now trigger form submission and check if it fails validation
    const form = emailInput.closest("form");
    if (form) {
      fireEvent.submit(form);
      expect(emailInput.checkValidity()).toBe(false);
    }
  });

  test("password input should be required", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const passwordInput = getByPlaceholderText("Password") as HTMLInputElement;
    expect(passwordInput).toBeRequired();
  });

  test("email input should be required", () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const emailInput = getByPlaceholderText("Email") as HTMLInputElement;
    expect(emailInput).toBeRequired();
  });

  test("should not navigate to dashboard with empty fields", () => {
    const mockNavigate = jest.fn();
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    const { getByText } = render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    const loginButton = getByText("log in");
    fireEvent.click(loginButton);

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
