import { useLocation } from "react-router-dom";

import * as SC from "./ValuesStyles";

import { values } from "../../db/db";

const Values: React.FC = () => {
  const location = useLocation();

  const { pathname } = location;

  const title = pathname === "/about" ? "Our values" : "Why join us?";

  return (
    <SC.ValuesSection>
      <SC.Title>{title}</SC.Title>
      <SC.List>
        {values.map(({ id, name, body, img }) => {
          const count = id < 9 ? "0" + id : id;

          return (
            <SC.Item key={id}>
              <SC.ImgWrapper>
                <img src={img} alt={name} />
                <SC.Count>
                  <span>{count}</span>
                </SC.Count>
              </SC.ImgWrapper>
              <h3>{name}</h3>
              <p>{body}</p>
            </SC.Item>
          );
        })}
      </SC.List>
    </SC.ValuesSection>
  );
};

export default Values;
