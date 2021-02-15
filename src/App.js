import styled from "styled-components";

const Container = styled.div`
  h1 {
    color: red;
  } // moving this comment to the next line would work

  h2 {
    color: blue;
  }
`;

export default function App() {
  return (
    <Container>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </Container>
  );
}
