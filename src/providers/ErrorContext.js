// "use client";

// import { createContext, useState, useContext } from "react";

// const ErrorContext = createContext();

// export const useError = () => useContext(ErrorContext);

// export const ErrorProvider = ({ children }) => {
//   const [errorMessage, setErrorMessage] = useState(null);

//   const showError = (message) => {
//     setErrorMessage(message);
//   };

//   const clearError = () => {
//     setErrorMessage(null);
//   };

//   return (
//     <ErrorContext.Provider value={{ errorMessage, showError, clearError }}>
//       {children}
//     </ErrorContext.Provider>
//   );
// };
