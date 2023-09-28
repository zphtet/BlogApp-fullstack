import { useNavigate } from "react-router-dom";

const useNavi = () => {
  const navi = useNavigate();

  const navigate = (path) => navi(path);
  return navigate;
};

export default useNavi;
