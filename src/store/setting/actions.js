import { settingSlice } from "./reducers";

export const {
  app_name,
  theme_scheme_direction,

  setSetting,
} = settingSlice.actions;
export default settingSlice.actions;
