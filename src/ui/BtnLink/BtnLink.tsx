import * as SC from "./BtnLinkStyled";

import { ILink, IMenu } from "../../utils/interfaces";

const ButtonLink: React.FC<ILink & Partial<IMenu>> = ({ content, path, handleMenu }) => {
  return (
  <div onClick={handleMenu}>
  <SC.LinkStyled href={path} content={content}>{content}</SC.LinkStyled>
  </div>);
};

export default ButtonLink;
