import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToast = (message, type) => {
  switch (type) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_CENTER,
      });
      break;
    default:
  }
};
