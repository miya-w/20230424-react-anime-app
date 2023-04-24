import { Outlet, NavLink } from "react-router-dom";
import Footer from "../components/footer";

//context
import AddToListContext from "../Context/AddToListContext";
import { useContext } from "react";

export default function RootLayout() {
  const { listLength } = useContext(AddToListContext);

  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>FavAnime</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="myList">MyList({listLength})</NavLink>
          <NavLink to="Account">Account</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
