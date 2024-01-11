import { ReactNode, Suspense, useState } from "react";
import { DNA } from "react-loader-spinner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import * as SC from './SharedLayoutStyles'

import Download from "../../components/Download/Download";
import ModalMenu from "../../ui/ModalMenu/ModalMenu";

type Props = {
  children: ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
const [isMenu, setIsMenu] = useState<boolean>(false)

const handleMenu = () => setIsMenu(!isMenu)

  return (
    <SC.SharedLayoutStyled isMenu={isMenu}>
      <Header handleMenu={handleMenu} isMenu={isMenu}/>
      {isMenu ? <ModalMenu handleMenu={handleMenu}/> : null}
      <Suspense
        fallback={
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        }
      >
        {children}
      </Suspense>
      <Download/>
      <Footer />
    </SC.SharedLayoutStyled>
  );
};

export default SharedLayout;
