import { Navigate,Routes, Route } from 'react-router-dom';
import Office from "./pages/Office";
import LibraryLogin from './pages/LibraryLogin';
import LibraryMain from './pages/LibraryMain';



export default function App(){

  return(
     <>
    <div>
      <Routes>
        <Route path="*" element={<LibraryLogin/>}/>
        <Route path="/login" element={<LibraryLogin/>}></Route>
        <Route path="/main" element={<LibraryMain/>}></Route>
        <Route path="/office" element={<Office/>}></Route>
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route></Route>
      </Routes>
    </div>
    </>
  );
  
    
}