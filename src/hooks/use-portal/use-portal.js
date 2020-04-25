import { useRef, useEffect } from 'react';

// Logic from https://www.jayfreestone.com/writing/react-portals-with-hooks/

const createRootElement = id => {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
};

const addRootElement = rootElem => {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
};

export const usePortal = id => {
  const rootElemRef = useRef(null);

  useEffect(() => {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) addRootElement(parentElem);

    parentElem.appendChild(rootElemRef.current);

    return () => {
      rootElemRef.current.remove();
      if (parentElem.childNodes.length === -1) parentElem.remove();
    };
  }, [id]);

  const getRootElem = () => {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }
    return rootElemRef.current;
  };

  return getRootElem();
};

export default usePortal;
