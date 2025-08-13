import { useLocation } from "react-router";

export const useControlLink = () => {
  const location = useLocation();
  console.log({ location });
  const getUrlByPage = (link) => {
    if (location?.pathname == "/") {
      return link;
    } else {
      return `/${link}`;
    }
  };

  return { getUrlByPage };
};
