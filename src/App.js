import styled from "styled-components";

const Container = styled.div`
    background-color: hsl(
        0,
        0%,
        95%
    ); // from react-select disabled state background
    
    h1 {
        color: red;
    }

    h2 {
        color: blue;
    }
`;

export default function App() {
    return (
        <div className='.App'>
            <Container>
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
            </Container>
        </div>
    );
}
