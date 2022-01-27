/**
 * Create custom hooks with predefined types
 * https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '@src/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector