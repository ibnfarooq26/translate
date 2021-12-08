import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

function LanguageOption(props) {
  const [langOptions,setLangOptions]=useState([])
  const langLists = langOptions.map((langoption) => (
    <option key={langoption.code} value={langoption.code}>
      {langoption.name}
    </option>
  ));

  useEffect(() => {
    fetchLanguageOption();
  }, []);
  const fetchLanguageOption = async () => {
    const LangUrl = "https://libretranslate.com/languages";
    const options = await axios.get(LangUrl);
    setLangOptions(options.data);
  };
  const handleValue=(e)=>{
props.handleLanguage(e.target.value)
  }
  
  return (
    
      <select className="form-select select" onChange={handleValue} >{langLists}</select>
    
  );
}

export default LanguageOption;
