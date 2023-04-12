import React from "react";
import { DictionaryData } from "../wordAPI";
import '../assets/styles/Result.scss';
import logo from '../assets/images/icon-new-window.svg'
interface resultProps{
    result: DictionaryData[];
}
export const Result: React.FC<resultProps> = ({ result }) => {

    return (
        <div className="response-div">
            {result.map((data, index) => (
                <div key={index}>
                    <div className="word-audio-div">
                        <span className="word-phonetics-span">
                        <h2>{data.word}</h2> 
                        <p className="phonetics">{data.phonetics[0].text}</p> 
                        </span>
                    </div>

                    <div className="noun-verb-divs-container">
                        {data.meanings.map((meaning, index) => (
                            <div key={index} className="noun-verb-div">
                                <h4>{meaning.partOfSpeech}</h4>
                                <h5>Meaning</h5>
                               <ul>
                                    {meaning.definitions.map((def, index) => (
                                        <div>
                                             <li key={index}>{def.definition}</li>
                                             <p className="example">{def.example}</p>
                                        </div>
                                    ))}
                                </ul>
                                <p className="synonyms-paragraph"><span className="synonyms-word">Synonyms</span>  <span className="synonyms">{meaning.synonyms[0]}</span></p>
                            </div>
                        ))}
                    </div>
                    <span className="link-span">
                        <h5>Source</h5>
                        <span className="url">
                            <a href={data.sourceUrls[0]} target="_blank">
                            {data.sourceUrls[0]} <img src={logo} alt="" />
                            </a> 
                        </span>
                    </span>
                </div>
            ))}
        </div>
    )
}