import { createContext, useState } from 'react';

export const PopUpContext = createContext();

const PopUpContextProvider = ({ children }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const closePopUp = () => {
    setShowPopUp(false);
  };

  //Context data
  const PopUpContextData = {
    showPopUp,
    setShowPopUp,
    closePopUp,
  };

  return <PopUpContext.Provider value={PopUpContextData}>{children}</PopUpContext.Provider>;
};

export default PopUpContextProvider;
