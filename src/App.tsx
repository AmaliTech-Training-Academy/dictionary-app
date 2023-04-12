import './App.scss';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { fetchWord } from './wordAPI';
import type { DictionaryData } from './wordAPI';
import { Result } from './components/Result';


const App: React.FC = () => {

  const [searchResult, setSearchResult] = useState<DictionaryData[]>([]);

  const handleSearch = async (word: string) => {
    const data = await fetchWord(word);
    setSearchResult(data);
    console.log(searchResult);
  }


  return (
    <div className="App">
      <Header />
      <Search onSubmit={handleSearch}/>
      <Result result={searchResult}/>
    </div>
  );
}

export default App;
