import { useEffect } from "react";
import {
  getWorks,
  workSelector,
  useAppDispatch,
  useAppSelector,
} from "@/redux";

export default function useWorks() {
  const dispatch = useAppDispatch();

  const {
    data: { works },
    loading,
    error,
  } = useAppSelector(workSelector);

  useEffect(() => {
    dispatch(getWorks());
  }, [dispatch]);

  return { works, loading, error };
}
