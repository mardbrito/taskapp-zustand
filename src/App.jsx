import { Route, Routes } from 'react-router';
import Welcome from './pages/Welcome';
import Tasks from './pages/Tasks';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </>
  );
}

export default App;
