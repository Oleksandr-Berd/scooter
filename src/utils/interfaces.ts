export interface IStyles {
  bg: string | (() => string | false);
  secBg: string;
  thirdBg?: string;
  isActive?: boolean;
}

export interface ILink {
  content: string;
  path: string;
  location?: string;
}

export interface ILocation {
  location: "header" | "footer";
}

export interface IMenu {
  handleMenu: () => void;
  isMenu: boolean;
}

export interface IMap {
  city: string;
}
