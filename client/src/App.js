import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";
import NotificationDashboard from "./Components/Notifications/Notification_dashboard/Notification_dashboard";
import AdminNotification from "./Components/Notifications/AdminNotification/AdminNotification";
import CustomerNotification from "./Components/Notifications/CustomerNotification/CustomerNotification";
import DeveloperNotification from "./Components/Notifications/DeveloperNotification/DeveloperNotification";
import NotificationPanel from "./Components/Notifications/NotificationPanel/NotificationPanel";
import AdminComplain from "./Components/Complains/AdminComplain/AdminComplain";
import CustomerComplain from "./Components/Complains/CustomerComplain/CustomerComplain";
import DeveloperComplain from "./Components/Complains/DeveloperComplain/DeveloperComplain";
import ComplainDashboard from "./Components/Complains/ComplainDashboard/ComplainDashboard";
import Financial from "./Components/Financial/Financial";
import NotificationHandler from "./Components/Notification_Handler/NotificationHandler";
import NotificationViewer from "./Components/Notification_Handler/Notification_viewer/NotificationViewer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="homepage" element={<HomePage />} />
            <Route path="notifications/">
              <Route index element={<NotificationDashboard />} />
              <Route path="admin" element={<AdminNotification />} />
              <Route path="customer" element={<CustomerNotification />} />
              <Route path="developer" element={<DeveloperNotification />} />
              <Route
                path="customer/all"
                exact
                element={<NotificationPanel isDev={false} />}
              ></Route>
              <Route
                path="developer/all"
                exact
                element={<NotificationPanel isDev={false} />}
              ></Route>
            </Route>

            <Route path="complain/">
              <Route index element={<ComplainDashboard />} />
              <Route path="admin" element={<AdminComplain />} />
              <Route path="customer" element={<CustomerComplain />} />
              <Route path="developer" element={<DeveloperComplain />} />
            </Route>
            <Route path="financial" element={<Financial />} />
            <Route path="notification" element={<NotificationHandler />} />
            <Route path="notification/new" element={<NotificationViewer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
