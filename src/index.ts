import type { TypedUseSelectorHook, Connect } from "react-redux";
import {
  useDispatch,
  useSelector as useDefaultSelector,
  connect as defaultConnect,
} from "react-redux";

export interface DefaultRootState {}

const useSelector: TypedUseSelectorHook<DefaultRootState> = useDefaultSelector;
const connect: Connect<DefaultRootState> = defaultConnect;

export { useDispatch, useSelector, connect };
