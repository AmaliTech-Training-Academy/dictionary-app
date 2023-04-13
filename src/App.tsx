import './App.scss';
import { useContext, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { fetchWord } from './wordAPI';
import type { DictionaryData } from './wordAPI';
import { Result } from './components/Result';
import { ThemeContext } from './ThemeContext'


const App: React.FC = () => {

  const [searchResult, setSearchResult] = useState<DictionaryData[]>([]);
  const context = useContext(ThemeContext);
  const {toggle}=context;
 
  const handleSearch = async (word: string) => {
    const data = await fetchWord(word);
    setSearchResult(data);
    console.log(searchResult);
  }
 

  return (
    <div className={!toggle?'lightTheme':"darkTheme"}>
        <div className="App">
            <Header />
            <Search onSubmit={handleSearch}/>
            <Result result={searchResult}/>
        </div>
    </div>
  );
}

export default App;
