import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoomMain from "../Rooms/pages";
import RoomDetail from "../Rooms/pages/Detail";
import ServicePage from "../Service/pages";
import MainLayout from "../Layout/mainLayout/MainLayout";
import Landing from '../Landing/index'
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/service" element={<MainLayout children={<ServicePage />} />} />
        <Route path='/room' element={<MainLayout children={<RoomMain />} />} />
        <Route path='/room/:roomId' element={<RoomDetail />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}
