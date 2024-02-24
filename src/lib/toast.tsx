import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  PropsWithChildren,
} from "react";

interface ToastContextType {
  showToast: boolean;
  toastTitle: string;
  toastDescription: string;
  isSuccess: boolean;
  setShowToast: Dispatch<SetStateAction<boolean>>;
  setToast: (title: string, desc: string, isSuccess: boolean, showToast: boolean) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [showToast, setShowToast] = useState(false);
  const [toastTitle, setToastTitle] = useState("");
  const [toastDescription, setToastDescription] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const setToast = (title: string, desc: string, showToast: boolean, isSuccess: boolean) => {
    setToastTitle(title);
    setToastDescription(desc);
    setShowToast(showToast);
    setIsSuccess(isSuccess);
  };

  const contextValue: ToastContextType = {
    setToast,
    setShowToast,
    showToast,
    isSuccess,
    toastTitle,
    toastDescription,
  };

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
