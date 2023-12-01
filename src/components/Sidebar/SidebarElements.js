import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  margin: auto;
  top: 60px;
  width: 100%;
  max-width: ${({ $isOpen }) => ($isOpen ? "400px" : "50px")};
  height: 100vh;
  border-right: 1px solid #000000;
  background: #3a3e41;
  flex: ${({ $isOpen }) => ($isOpen ? "1" : "none")};
`;

export const SidebarWrapper = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(240, 241, 242, 0.09);
  cursor: pointer;
`;

export const SidebarItems = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  /* white-space: nowrap; */
  padding: 0.75em;
  color: #595f64;

  span {
    color: #b7bcc0;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const SidebarContentWrapper = styled.div`
  height: 0;
  overflow: hidden;
  transition: 0.3s;
`;

export const SearchHeader = styled.div`
  margin-left: ${({ $isOpen }) => ($isOpen ? "400px" : "50px")};
  background: #70b0e0;
  padding: 1em;

  p {
    margin-left: 0.5em;
    font-weight: bold;
    color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  }
`;
