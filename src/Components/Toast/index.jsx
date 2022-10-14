import { useToast } from "../../Contexts/ToastContext";
import { ToastContaiter } from "../ToastContainer";
import { List } from "./style";

export const Toast = () => {
  const { toastList } = useToast();
  return (
    <List>
      {toastList?.map((toast) => (
        <ToastContaiter key={toast.id} toast={toast} />
      ))}
    </List>
  );
};
