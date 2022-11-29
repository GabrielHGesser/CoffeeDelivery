import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  max-width: 90rem;
  max-height: 6.5rem;
  margin: 0 auto; // Se der b.o modificar para padding ...
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: center;
`;
