import * as SC from "./BtnLinkStyled";

import { ILink } from "../../utils/interfaces";

const ButtonLink: React.FC<ILink> = ({ content, path }) => {
  return <SC.LinkStyled to={path} content={content}>{content}</SC.LinkStyled>;
};

export default ButtonLink;
