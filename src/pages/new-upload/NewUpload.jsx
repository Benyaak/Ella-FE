import React from 'react';
import { useDispatch } from 'react-redux';
import HeaderBar from '../../components/Molecules/header-bar/HeaderBar';
import PDFViewer from '../../components/Organisms/pdf-viewer/PDFViewer';

export const NewUpload = () => {
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
      <PDFViewer path='./Document_Medical_Stef2.pdf' />
    </div>
  );
};

export default NewUpload;
