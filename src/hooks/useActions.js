import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/slices/favouritesSlice";

import * as userActions from "../store/user/userThunk"

export const useActions = () => {
  const dispatch = useDispatch();
  const rootActions = {
    ...actions,
    ...userActions
  }

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
