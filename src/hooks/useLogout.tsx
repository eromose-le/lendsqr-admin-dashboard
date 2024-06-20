import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routeEnum } from "../constants/RouteConstants";

interface LogoutProps {
  logout: () => Promise<void>;
  isLoading: boolean;
}

function useLogout(): LogoutProps {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const logout = useCallback(async () => {
    setIsLoading(true);

    try {
      navigate(routeEnum.LOGIN);
    } catch (err: any) {
      navigate(routeEnum.LOGIN);
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  return { logout, isLoading };
}

export default useLogout;
