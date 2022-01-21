import './App.css';
import Datatable from './components/Datatable';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        TRU Exam Lookup System
      </header>

      <Datatable></Datatable>
      
      <footer className="App-footer">
      Copyright &copy; 2021 Grant Marshall Superg2009 <br/>
      'TRU', 'Thompson Rivers University' and scraped data (https://www.tru.ca/current/enrolment-services/exam-schedule/exam.html) are property of the University and are not claimed. <br/>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
       </footer>
    </div>
  );
}

export default App;
