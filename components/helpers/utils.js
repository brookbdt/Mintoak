import { notification } from "antd";

const hasWindow = typeof window !== "undefined";

const useWindowSize = () => {
  const width = hasWindow ? window.innerWidth : null;
  const height = hasWindow ? window.innerHeight : null;
  return {
    width,
    height,
  };
};

const Notification = ({ type, message, description = "" }) => {
  notification[type]({
    message,
    description,
  });
};

export { useWindowSize, Notification };
