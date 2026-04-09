import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddUserPage from "@/app/users/new/page";

describe("AddUserPage", () => {
  // Checks the form renders all four required fields
  it("renders all form fields", () => {
    render(<AddUserPage />);

    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
    expect(screen.getByLabelText("Age")).toBeInTheDocument();
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
    // Interests uses a fieldset/legend so we query by the legend text
    expect(screen.getByText("Interests")).toBeInTheDocument();
  });

  // Submitting with no data should show all four validation errors
  it("shows validation errors when submitted empty", async () => {
    render(<AddUserPage />);

    await userEvent.click(screen.getByRole("button", { name: "Add User" }));

    await waitFor(() => {
      expect(screen.getByText("Full name is required")).toBeInTheDocument();
      expect(screen.getByText("Please enter your age")).toBeInTheDocument();
      expect(screen.getByText("Country is required")).toBeInTheDocument();
      expect(
        screen.getByText("Please select at least one interest")
      ).toBeInTheDocument();
    });
  });

  // Age validation — under 18 should be rejected
  it("shows an error when age is under 18", async () => {
    render(<AddUserPage />);

    await userEvent.type(screen.getByLabelText("Age"), "16");
    await userEvent.click(screen.getByRole("button", { name: "Add User" }));

    await waitFor(() => {
      expect(screen.getByText("Must be 18 or older")).toBeInTheDocument();
    });
  });

  // Age validation — 18 should be accepted (no age error shown)
  it("accepts an age of 18", async () => {
    render(<AddUserPage />);

    await userEvent.type(screen.getByLabelText("Age"), "18");
    await userEvent.click(screen.getByRole("button", { name: "Add User" }));

    await waitFor(() => {
      expect(screen.queryByText("Must be 18 or older")).not.toBeInTheDocument();
    });
  });

  // Interests validation — checking at least one should clear the error
  it("clears the interests error when a checkbox is selected", async () => {
    render(<AddUserPage />);

    // Submit first to trigger errors
    await userEvent.click(screen.getByRole("button", { name: "Add User" }));

    await waitFor(() => {
      expect(
        screen.getByText("Please select at least one interest")
      ).toBeInTheDocument();
    });

    // Now check an interest
    await userEvent.click(screen.getByRole("checkbox", { name: "Tactics" }));

    await waitFor(() => {
      expect(
        screen.queryByText("Please select at least one interest")
      ).not.toBeInTheDocument();
    });
  });
});
