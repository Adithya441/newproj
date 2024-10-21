import { SettingState, SettingDefaultState } from "./interface";

// Initial Setting State
export const initialState: SettingState = {
  saveLocal: "sessionStorage",
  storeKey: "xraysetting-react",
  setting: {
    app_name: {
      value: "XRay",
    },
    theme_scheme_direction: {
      value: "ltr",
    },
    
  },
};

// Default Setting State
export const defaultState: SettingDefaultState = {
  saveLocal: "sessionStorage",
  storeKey: "xraysetting",
  setting: {
    app_name: {
      target: '[data-setting="app_name"]',
      choices: [],
      type: "text",
      value: "XRay",
    },
    theme_scheme_direction: {
      target: "html",
      choices: ["ltr", "rtl"],
      type: "layout_design",
      value: "ltr",
    },
    
  },
};
