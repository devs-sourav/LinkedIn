import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Friend from "./components/Friend";
import Info from "./components/Info";
import Post from "./components/Post";
import Feed from "./pages/Feed";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/social" element={<RootLayout/>}>
          <Route path="profile" element={<Home/>}>
            <Route path="info" element={<Info/>}></Route>
            <Route path="friend" element={<Friend/>}></Route>
            <Route path="post" element={<Post/>}></Route>
          </Route>
          <Route path="feed" element={<Feed/>}></Route>
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
