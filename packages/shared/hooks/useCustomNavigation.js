import { useNavigate } from "react-router";

const useCustomNavigation = () => {
  const navigate = useNavigate();

  return { navigate };
};

export default useCustomNavigation;
