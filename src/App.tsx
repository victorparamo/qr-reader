import AppComponent from './components/App';
import QRValidatorProvider from './Providers/ValidatorProvider';
import './App.css';

const App = () => {
  // console.log(import.meta.env.VITE_VALIDATOR_API);
  // console.log(import.meta.env.VITE_API_KEY);

  return (
    <div className="App">
      <header className="App-header">
        <QRValidatorProvider>
          <AppComponent />
        </QRValidatorProvider>
      </header>
    </div>
  );
};

export default App;
