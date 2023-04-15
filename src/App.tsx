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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(
    () => {
      if(searchResult.length === 0){
        handleSearch('keyboard');
      }
    }
  )
  
  const context = useContext(ThemeContext);
  const {toggle, setToggle} = context;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkMode = mediaQuery.matches;
    setToggle(prefersDarkMode);
  }, [setToggle]);
  
  const handleSearch = async (word: string) => {
    setIsLoading(true);
    const data = await fetchWord(word);
    setSearchResult(data);
    setIsLoading(false);
  }
 
  return (
    <div className={!toggle?'lightTheme':"darkTheme"}>
        <div className="App">
            <Header />
            <Search onSubmit={handleSearch}/>
            {!Array.isArray(searchResult) ? (
        <WordNotFound />
      ) : (
        <Result result={searchResult} loading={isLoading}/>
      )}
        </div>
    </div>
  )
}

export default App;
