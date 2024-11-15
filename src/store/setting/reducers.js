import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './state';
import { updateHtmlAttr, updateTitle, updateStorage, updateDomValueBySetting, getStorage } from '../../utilities/setting';
import _ from 'lodash';

// Helper function to create the setting object for storage
const createSettingObj = (state) => ({
  saveLocal: state.saveLocal,
  storeKey: state.storeKey,
  setting: _.cloneDeep(state.setting),
});

export const settingSlice = createSlice({
  name: 'setting',
  initialState: {
    meterno: null, // Default value for meterno
    saveLocal: 'none', // Default value for saveLocal
    storeKey: 'settings', // Default store key
    setting: defaultState.setting, // Default setting value
  },
  reducers: {
    // Set settings from local storage
    setSetting: (state, action) => {
      const json = getStorage(state.storeKey);
      if (json === 'none') {
        state.saveLocal = 'none';
      } else if (json !== null) {
        state.saveLocal = json.saveLocal;
        state.setting = json.setting;
      }

      // Update DOM value based on the current settings
      updateDomValueBySetting(state.setting);
      // Save settings to storage
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    // Reset the settings to their default state
    reset_state: (state) => {
      state.setting = defaultState.setting;
      // Update DOM and storage after resetting
      updateDomValueBySetting(state.setting);
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    // Save the local state
    saveLocal: (state, action) => {
      if (action.payload !== undefined) {
        state.saveLocal = action.payload;
      }
      // Update the storage after saving
      const settingObj = createSettingObj(state);
      updateStorage(state.saveLocal, state.storeKey, settingObj);
    },
    // Set the application name in the settings
    app_name: (state, action) => {
      if (action.payload !== undefined) {
        state.setting.app_name.value = action.payload;
      }
      // Update the document title
      updateTitle(state.setting.app_name.value);
      // Save updated settings to storage
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
    // Set the theme direction
    theme_scheme_direction: (state, action) => {
      if (action.payload !== undefined) {
        state.setting.theme_scheme_direction.value = action.payload;
      }
      // Update HTML attributes related to direction
      updateHtmlAttr({ prop: 'dir', value: state.setting.theme_scheme_direction.value });
      // Save updated settings to storage
      updateStorage(state.saveLocal, state.storeKey, createSettingObj(state));
    },
  },
});

export default settingSlice.reducer;
