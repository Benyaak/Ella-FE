import React from 'react';
import { useDispatch } from 'react-redux';
import GDPRButton from '../../components/Atoms/gdpr-button/GDPRButton';
import HeaderBar from '../../components/Molecules/header-bar/HeaderBar';
import PDFViewer from '../../components/Molecules/pdf-viewer/PDFViewer';
import IntroductionPanel from '../../components/Atoms/introduction-panel/IntroductionPanel';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  const ColoredLine = ({ color }) => (
    <hr
      style={{
            color,
            backgroundColor: color,
            height: 0.5
        }}
    />
);
  
  return (
    <div>
      <HeaderBar />
      <ColoredLine color="gray" />
      <IntroductionPanel />
      <div>
        <b>I consent to GDPR and allow the use of my words to improve ELLA's responses</b>
        <GDPRButton />
      </div>
      
      <PDFViewer path='./Document_Medical_Stef.pdf' />
    </div>
  );
};

export default Home;
