export interface IStyles {
    bg:string | (()=>string | false);
    secBg:string;
    isActive?:boolean;
}

export interface ILink {
    content: string;
    path:string;
}

export interface ILocation {
    location: "header" | "footer";
}