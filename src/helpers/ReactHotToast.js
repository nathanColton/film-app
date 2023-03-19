import { toast } from "react-hot-toast";

export const toastWarnNotify2 = (msg) => {
  toast.swarn(msg, {
    duration: 5000,
    position: "left-bottom",
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "yellow",
      secondary: "#FFFAEE",
    },
  });
};
export const toastSucessNotify2 = (msg) => {
  toast.success(msg, {
    duration: 5000,
    position: "left-bottom",
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "green",
      secondary: "#FFFAEE",
    },
  });
};
export const toastErrorNotify2 = (msg) => {
  toast.error(msg, {
    duration: 5000,
    position: "left-bottom",
    style: {
      border: "1px solid #713200",
      padding: "16px",
      color: "#713200",
    },
    iconTheme: {
      primary: "red",
      secondary: "#FFFAEE",
    },
  });
};
