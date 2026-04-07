import AddUserPage from "@/app/users/new/page";
import { render, screen } from "@testing-library/react";

describe("AddUserPage", () => {
  it("renders all form fields", () => {
    render(<AddUserPage />);

    expect(screen.getByLabelText("Full name")).toBeInTheDocument();
  });
});
