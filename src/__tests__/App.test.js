import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // for the toBeInTheDocument() matcher
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/my photo/i); // "my photo" as an example alt text
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining("my-photo.jpg"));
});

test("displays a second-level heading with text `About Me`", () => {
  render(<App />);
  const aboutMeHeading = screen.getByRole("heading", {
    name: /about me/i,
    level: 2,
  });
  expect(aboutMeHeading).toBeInTheDocument();
});

test("displays a paragraph for biography", () => {
  render(<App />);
  const bioParagraph = screen.getByText(/your biography text here/i);
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
});

test("displays a link to LinkedIn", () => {
  render(<App />);
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
});
