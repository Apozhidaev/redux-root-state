import type { TypedUseSelectorHook, Connect } from "react-redux";
import {
  useDispatch as useDefaultDispatch,
  useSelector as useDefaultSelector,
  connect as defaultConnect,
} from "react-redux";

type AppDispatch = ReturnType<typeof useDefaultDispatch>;

export interface DefaultAppDispatch extends AppDispatch {}
export interface DefaultRootState {}

const useDispatch: () => DefaultAppDispatch = useDefaultDispatch;
const useSelector: TypedUseSelectorHook<DefaultRootState> = useDefaultSelector;
const connect: Connect<DefaultRootState> = defaultConnect;

export { useDispatch, useSelector, connect };
