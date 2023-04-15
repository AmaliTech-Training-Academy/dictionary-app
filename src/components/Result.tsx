import React from "react";
import { DictionaryData } from "../wordAPI";
import '../assets/styles/Result.scss';
import AudioPlayer from "./AudioPlayer";
import logo from '../assets/images/icon-new-window.svg'
import WordNotFound from "./validation message/WordNotFound";
import { spawn } from "child_process";
import Loading from "./Loading";
interface resultProps{
    result: DictionaryData[];
    loading: boolean;
}
export const Result: React.FC<resultProps> = ({ result, loading }) => {

        return (
            <>
              
              {loading ? (
                <div className="loading">
                    <Loading />
                </div>  
              ) : (
                  <div className="response-div">
                  {result.map((data, index) => (
                      <div className="response" key={index}>
                          <div className="word-audio-div">
                              <span className="word-phonetics-span">
                              <h2>{data.word}</h2> 
                              <p className="phonetics">{data.phonetics[0].text}</p> 
                              </span>
                             <span>{!data.phonetics[data.phonetics.length - 1].audio ? "" : 
                                  <AudioPlayer audioUrl={data.phonetics[data.phonetics.length - 1].audio}/>} 
                              </span> 
                          </div>
      
                          <div className="noun-verb-divs-container">
                              {data.meanings.map((meaning, index) => (
                                  <div key={index} className="noun-verb-div">
                                      <h4 className="noun-verb">{meaning.partOfSpeech}</h4>
                                      <h5>Meaning</h5>
                                     <ul className="definition-list">
                                          {meaning.definitions.map((def, index) => (
                                              <div>
                                                   <li key={index}>{def.definition}</li>
                                                   <p className="example">{def.example === undefined || '' ?  "" :
                                                    `"${def.example}"`}
                                                  </p>
                                              </div>
                                          ))}
                                      </ul>
                                              {meaning.synonyms.length === 0 ? <span></span> : 
                                              <span>
                                                  <p className="synonyms-paragraph">
                                                      <span className="synonyms-word">Synonyms</span>
                                                      <span className="synonyms">{meaning.synonyms[0]}</span>
                                                  </p>
                                              </span> }
                                      
                                  </div>
                              ))}
                          </div>
                          <hr />
                          <span className="link-span">
                              <h5 id="source-word">Source</h5>
                              <span className="url">
                                  <a id="http" href={data.sourceUrls[0]} target="_blank" >
                                      {data.sourceUrls[0]} 
                                  </a>
                                  <a href={data.sourceUrls[0]} target="_blank" >
                                      <span>
                                          <img src={logo} alt="new window" />
                                      </span>
                                  </a> 
                              </span>
                          </span>
                      </div>
                  ))}
              </div>
              )
                  
              }
            </>
        );
    
}