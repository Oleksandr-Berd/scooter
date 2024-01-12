import * as SC from './ManualStyles'

type Props = {
  name: string;
  body: string;
  icon: string
};

const ManualItem: React.FC<Props> = ({ name, body, icon }) => {
  return <SC.Item>
    <SC.Icon src={icon} alt={name} />
    <div>
    <SC.Title>{name}</SC.Title>
    <SC.Body>{body}</SC.Body>
    </div>
  </SC.Item>;
};

export default ManualItem;
