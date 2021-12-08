import React, { useState } from "react";
import axios from 'axios'
import "./Translate.css";
import LanguageOption from "./LanguageOption";
function Translate() {
  const [translated, setTranslated] = useState("");
  const [source,setSource]=useState("en")
  const [target,setTarget]=useState('en')
  let input='';
 const  handleInput=(e)=>{
    input=e.target.value

  }
  const handleSource=(option)=>{
setSource(option)
  }
  const handleTarget=(option)=>{
    setTarget(option)
  }
  const translating = async (e) => {
   e.preventDefault();
  const translationUrl= 'https://libretranslate.de/translate'
    const res=await axios.post(translationUrl,{
      q:input,
      source:source,
      target:target,
      format:"text",
    })
  setTranslated(res.data.translatedText)

  };
  return (
    <>
      <div className="transFrom">
        Translated From
        <LanguageOption handleLanguage={handleSource}/>
        <form onSubmit={translating}>
        <textarea className="textarea"onChange={handleInput} ></textarea><br/>
        <button className='btn btn-primary' type="submit" >Translate</button>
        </form>
      </div>
      <div className="transTo">
        Translated To
        <LanguageOption handleLanguage={handleTarget}/>
        <textarea className="textarea" value={translated}></textarea>
      </div>
    </>
  );
}

export default Translate;
