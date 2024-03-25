import { FaHome, FaUserCircle, FaUserFriends, FaBookOpen, FaCalendar } from "react-icons/fa";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { PiFilesFill } from "react-icons/pi";

export const NAVIGATION_DATA = [
  {
    title: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    title: "Groups",
    path: "/groups",
    icon: <FaBookOpen />,
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <BiSolidMessageSquareDetail />,
  },
  {
    title: "Friends",
    path: "/friends",
    icon: <FaUserFriends />,
  },
  {
    title: "Notifications",
    path: "/notifications",
    icon: <IoIosNotifications />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <FaCalendar />,
  },
  {
    title: "Files",
    path: "/files",
    icon: <PiFilesFill />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUserCircle />,
  },
];
