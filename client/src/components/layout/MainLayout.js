import React from "react";
import { Container } from "react-bootstrap";
import { TopNavBar } from "./TopNavBar";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <TopNavBar />
      {/* dynamic content */}
      <main className="main">
        <Container>{children}</Container>
      </main>
      {/* footer */}
      <footer className="footer bg-dark text-light py-5 text-center">
        &copy; right reserved
      </footer>
    </div>
  );
};
