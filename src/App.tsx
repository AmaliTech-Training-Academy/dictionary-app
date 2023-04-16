import './App.scss';
import { useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import { fetchWord } from './wordAPI';
import type { DictionaryData } from './wordAPI';
import { Result } from './components/Result';
import { ThemeContext } from './ThemeContext'
import WordNotFound from './components/validation message/WordNotFound';

const App: React.FC = () => {

  const [searchResult, setSearchResult] = useState<DictionaryData[]>([]);
  
  useEffect(
    () => {
      if(searchResult.length === 0){
        handleSearch('keyboard');
      }
    }
  )
  
  const context = useContext(ThemeContext);
  const {toggle,emptySearchBox}=context;
 
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
            {!Array.isArray(searchResult) ? (
        !emptySearchBox && <WordNotFound />
      ) : (
        <Result result={searchResult}/>
      )}
        </div>
    </div>
  )
}

export default App;
