import styled from '@emotion/styled';

import AppComponent from './components/App';
import QRValidatorProvider from './Providers/ValidatorProvider';

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
`;

const App = () => (
  <StyledApp>
    <QRValidatorProvider>
      <AppComponent />
    </QRValidatorProvider>
  </StyledApp>
);

export default App;
