import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderBar from '../../components/Molecules/header-bar/HeaderBar';
import FooterBar from '../../components/Molecules/footer-bar/FooterBar';
import UploadFileButton from '../../components/Atoms/upload-file-button/UploadFileButton';
import PDFViewer from '../../components/Organisms/pdf-viewer/PDFViewer';
import IntroductionPanel from '../../components/Atoms/introduction-panel/IntroductionPanel';
import RatingButtons from '../../components/Atoms/rating-buttons/RatingButtons';
import StatPopup from '../../components/Organisms/stat-popup/StatPopup';

export const Home = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  
  return (
    <div>
      <HeaderBar />
      <UploadFileButton />
      <IntroductionPanel />
      <StatPopup />
      <br />
      <PDFViewer path='./Document_Medical_Stef.pdf' />
      <RatingButtons />
      <FooterBar />
      
    </div>
  );
};

export default Home;
