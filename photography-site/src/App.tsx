import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/collection/:collectionId"
            element={<CollectionPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
