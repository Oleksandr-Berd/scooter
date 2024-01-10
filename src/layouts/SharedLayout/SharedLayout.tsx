import { ReactNode, Suspense } from "react";
import { DNA } from "react-loader-spinner";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Download from "../../components/Download/Download";

type Props = {
  children: ReactNode;
};

const SharedLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
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
    </main>
  );
};

export default SharedLayout;
