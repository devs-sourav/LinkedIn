import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/signin" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/" element={<RootLayout/>}>
          <Route path="/Home" element={<Home/>}></Route>
        </Route>
    </>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
