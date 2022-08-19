export interface Config {
  ignore?: Array<string>;
  include?: Array<string>;
}

export interface Options {
  config?: string;
  file?: string;
  path?: string;
  isTestingCLI?: boolean;
};

export interface InstallDependenciesOptions {
  config?: Config;
  file?: string;
  debug?: boolean
  dest?: string;
  exec?: any;
  isTesting?: boolean;
}
