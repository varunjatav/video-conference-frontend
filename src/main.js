import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./output.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RecordMeet from "./routes/RecordMeet.jsx";
import MeetingClips from "./routes/MeetingClips.jsx";
import ShareMeeting from "./routes/ShareMeeting.jsx";
import MailCalender from "./routes/MailCalender.jsx";
import CloudStorage from "./routes/CloudStorage.jsx";
import ErrorBoundary from "./routes/ErrorBoundary.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import AccountSettings from "./routes/AccountSettings.jsx";
import Home from "./components/Home.jsx";
import AccountUpdate from "./routes/AccountUpdate.jsx";
import ResetPassword from "./routes/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorBoundary/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        errorElement: <ErrorBoundary/>,
        
        children: [
          {
            index: true,
            element: <RecordMeet />,
          },
          {
            path: "meeting-clips",
            element: <MeetingClips />,
          },
          {
            path: "share-meetings",
            element: <ShareMeeting />,
          },
          {
            path: "mail-and-calenders",
            element: <MailCalender />,
          },
          {
            path: "cloud-storages",
            element: <CloudStorage />,
          },
        ],
      },
      {
        path:'/login',
        element: <Login/>,
        errorElement: <ErrorBoundary/>,
      },
      {
        path: "/sign-up",
        element: <SignUp/>,
        errorElement: <ErrorBoundary/>,
      },
      {
          path: "/account-settings",
          element: <AccountSettings/>,
          errorElement: <ErrorBoundary/>,
          children: [
            {
              index: true,
              element: <AccountUpdate/>
            },
          ]
      },
      {
        path:"/reset-password",
        element: <ResetPassword/>
      },
     
    ],
},




]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
