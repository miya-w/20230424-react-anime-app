import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
  Route, 
} from "react-router-dom"

//context provider
import { AddToListProvider } from "./Context/AddToListContext";

// pages
import HomePage from "./pages/HomePage"
import MyList from "./pages/MyList";
import Error404 from "./pages/404";
import About from "./pages/About"
import LogIn from "./pages/Account/logIn";
import SignUp from "./pages/Account/SignUp";

// layouts
import RootLayout from "./layout/RootLayout"
import AccountLayout from './layout/AccountLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="myList" element={<MyList />} />
      <Route path="Account" element={<AccountLayout />}>
        <Route path="login" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
)


function App() {
  return (
    <AddToListProvider>
      <RouterProvider router={router} />
    </AddToListProvider>
    
  );
}

export default App;
