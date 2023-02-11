import type { AppDispatch, RootState } from "@/redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppDispatch, useAppSelector };
