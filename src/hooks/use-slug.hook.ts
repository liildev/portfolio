import { useRouter } from "next/router";
import { useEffect } from "react";
import { getWork, useAppDispatch, useAppSelector, workSelector } from "@/redux";

export default function useSlug() {
  const dispatch = useAppDispatch();

  const {
    query: { slug },
    isReady,
  } = useRouter();

  const {
    data: { work },
    loading,
    error,
  } = useAppSelector(workSelector);

  useEffect(() => {
    if (isReady) {
      dispatch(getWork(slug));
    }
  }, [dispatch, isReady, slug]);

  return { work, error, loading };
}
