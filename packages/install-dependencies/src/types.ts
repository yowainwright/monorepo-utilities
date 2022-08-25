export interface Config {
  ignore?: Array<string>;
  include?: Array<string>;
}

export interface Options {
  config?: string;
  debug?: boolean;
  dest?: string;
  file?: string;
  hasLockfile?: boolean;
  isTesting?: boolean;
  isTestingCLI?: boolean;
  runner?: string;
};

export interface InstallDependenciesOptions {
  config?: Config;
  debug?: boolean
  dest?: string;
  exec?: any;
  file?: string;
  isTesting?: boolean;
  hasLockfile?: boolean;
  path?: string;
  runner?: string;
}
