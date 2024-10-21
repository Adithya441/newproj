interface SettingValueMap {
  value: String | null | "";
}

interface DefaultMap {
  target: String | Element;
  choices: Array<String>;
  type: String;
}
interface SettingArrValueMap {
  value: Array<String>,
}

interface DefaultVStringMap extends DefaultMap, SettingValueMap {}
interface DefaultVArrayMap extends DefaultMap, SettingArrValueMap {}

export interface SettingState {
  saveLocal: String;
  storeKey: String;
  setting: {
    app_name: SettingValueMap;

    theme_scheme_direction: SettingValueMap;

  };
}

export interface SettingDefaultState {
  saveLocal: String;
  storeKey: String;
  setting: {
    app_name: DefaultVStringMap;

    theme_scheme_direction: DefaultVStringMap;

  };
}
