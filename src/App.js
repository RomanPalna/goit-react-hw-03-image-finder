import ImageGalerry from './components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div>
      <ImageGalerry />
      <ToastContainer autoclose={3000} />
    </div>
  );
}

export default App;
