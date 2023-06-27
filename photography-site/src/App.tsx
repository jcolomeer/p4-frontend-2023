import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
export default function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}  />
          <Route path="/collection/:id" element={<CollectionPage/ >}>
        </Routes>
      </BrowserRouter> */}
      <MainPage />
    </>
  );
}
