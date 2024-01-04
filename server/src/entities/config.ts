interface ConfigSchema {
  api: {
    uri: string;
    version: string;
  };

  app: {
    host: string;
    port: number;
    logConfigPath: string;
    useHttps: boolean;
    httpsKey: string;
    httpsCert: string;
    accessTokenSecret: string;
    accessTokenExpiresIn: string;
    refreshTokenSecret: string;
    refreshTokenExpiresIn: string;
    bcryptSaltRounds: number;
  };

  db: {
    host: string;
    port: number;
    user: string;
    password: string;
    name: string;
    maxPoolSize: number;
  };
}

export class Config {
  public apiURI: string = '';
  public apiVersion: string = '';
  public appHost: string = '';
  public appPort: number = 0;
  public appLogConfigPath: string = '';
  public appUseHttps: boolean = false;
  public appHttpsKey: string = '';
  public appHttpsCert: string = '';
  public appAccessTokenSecret: string = '';
  public appAccessTokenExpiresIn: string = '';
  public appRefreshTokenSecret: string = '';
  public appRefreshTokenExpiresIn: string = '';
  public appBcryptSaltRounds: number = 0;
  public dbHost: string = '';
  public dbPort: number = 0;
  public dbUser: string = '';
  public dbPassword: string = '';
  public dbName: string = '';
  public dbMaxPoolSize: number = 0;
  constructor(configureVars: ConfigSchema) {
    this.apiURI = configureVars.api.uri;
    this.apiVersion = configureVars.api.version;
    this.appHost = configureVars.app.host;
    this.appPort = configureVars.app.port;
    this.appLogConfigPath = configureVars.app.logConfigPath;
    this.appUseHttps = configureVars.app.useHttps;
    this.appHttpsKey = configureVars.app.httpsKey;
    this.appHttpsCert = configureVars.app.httpsCert;
    this.appAccessTokenSecret = configureVars.app.accessTokenSecret;
    this.appAccessTokenExpiresIn = configureVars.app.accessTokenExpiresIn;
    this.appRefreshTokenSecret = configureVars.app.refreshTokenSecret;
    this.appRefreshTokenExpiresIn = configureVars.app.refreshTokenExpiresIn;
    this.appBcryptSaltRounds = configureVars.app.bcryptSaltRounds;
    this.dbHost = configureVars.db.host;
    this.dbPort = configureVars.db.port;
    this.dbUser = configureVars.db.user;
    this.dbPassword = configureVars.db.password;
    this.dbName = configureVars.db.name;
    this.dbMaxPoolSize = configureVars.db.maxPoolSize;
  }
}
