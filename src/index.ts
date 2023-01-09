import type { EqualityFn } from "react-redux";
import { useSelector as useDefaultSelector, useDispatch } from "react-redux";

export interface DefaultRootState {}

const useSelector: <TState = DefaultRootState, Selected = unknown>(
  selector: (state: TState) => Selected,
  equalityFn?: EqualityFn<Selected> | undefined
) => Selected = useDefaultSelector;

export { useDispatch, useSelector };
