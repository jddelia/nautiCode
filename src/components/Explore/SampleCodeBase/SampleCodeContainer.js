import React from 'react';

import SampleCodeHeader from './SampleCodeHeader';
import SampleCodeContent from './SampleCodeContent';

const SampleCodeContainer = () => {
  return (
    <div className="sampleCodeContainer">
      <SampleCodeHeader />
      <SampleCodeContent />
    </div>
  );
};

export default SampleCodeContainer;