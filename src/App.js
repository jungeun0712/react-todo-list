import './App.css';
import Calendar from './components/Calendar';
import TaskAdd from './components/TaskAdd';

function App() {
  return (
    <div className="App">
      <div className="App-item">
        <div className="title">
          <h1 className="title-text">TODO LIST</h1>
        </div>
        <Calendar></Calendar>
        {/* <TaskAdd></TaskAdd> */}
      </div>
    </div>
  );
}

export default App;