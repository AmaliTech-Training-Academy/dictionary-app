import './App.scss';
import Header from './components/Header';
import Search from './components/Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
