import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toastList, setToastList] = useState([
    { id: uuid(), message: "Deu bom!", mode: "success", ms: 10000 },
  ]);

  const toast = (message, mode, ms) => {
    setToastList([...toastList, { id: uuid(), message, mode, ms }]);
  };

  const removeToast = (id) => {
    const filteredToastList = toastList.filter((toast) => toast.id !== id);
    setToastList(filteredToastList);
  };

  return (
    <ToastContext.Provider value={{ toastList, toast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
