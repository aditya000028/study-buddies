import "./App.css";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";

import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import MainNavigation from "./components/layout/navigation/MainNavigation";
import GroupsPage from "./pages/Groups";
import MessagesPage from "./pages/Messages";
import FriendsPage from "./pages/Friends";
import NotificationsPage from "./pages/Notifications";
import CalendarPage from "./pages/Calendar";
import FilesPage from "./pages/Files";

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="content">
          <MainNavigation />
          <div className="page">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/groups" element={<GroupsPage />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/friends" element={<FriendsPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/files" element={<FilesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </div>
          {/* <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button> */}
        </main>
      )}
    </Authenticator>
  );
}
