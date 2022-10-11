import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState([
    { id: uuid(), message: "Deu bom!", mode: "success", time: 1000 },
  ]);

  return (
    <ToastContext.Provider value={{ toastList }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
