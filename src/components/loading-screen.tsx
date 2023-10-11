import styled from 'styled-components';

export default function LoadingScreen() {
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  `;

  const Text = styled.span`
    font-size: 24px;
  `;

  return (
    <Wrapper>
      <Text>Loading...</Text>
    </Wrapper>
  );
}
