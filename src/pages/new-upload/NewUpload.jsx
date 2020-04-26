import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderBar from '../../components/Molecules/header-bar/HeaderBar';
import FooterBar from '../../components/Molecules/footer-bar/FooterBar';
import PDFViewer from '../../components/Organisms/pdf-viewer/PDFViewer';
import RatingButtons from '../../components/Atoms/rating-buttons/RatingButtons';

export const NewUpload = () => {
  const dispatch = useDispatch();
  dispatch({
    type: 'TRIGGER_INITIAL_STATE',
  });
  
  return (
    <div>
      <HeaderBar />
      <br />
      <PDFViewer path='./SURGICON.pdf' />
      <RatingButtons />
      <FooterBar />
    </div>
  );
};

export default NewUpload;
