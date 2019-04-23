import React from 'react';

const SampleCodeHeader = () => {
  return (
    <header>
      <img 
        className="sampleSourceCode" 
        src={require("../../../assets/greetingsourcecode.png")}
        alt="source code" />
    </header>
  );
};

export default SampleCodeHeader;