import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const navigation = useNavigation();

    return (
      <div>
        <h2>This is Home Section</h2>
        <Header></Header>
        {
          navigation.state === "loading" ? <p>Loading.......</p> : <Outlet></Outlet>
        }
        <Footer></Footer>
      </div>
    );
};

export default Home;