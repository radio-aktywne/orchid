type Url = {
  host: string;
  path?: null | string;
  port?: null | number;
  scheme: string;
};

type Urls = {
  sunflower: Url;
};

export type IdentityWidgetInput = {
  urls: Urls;
};
