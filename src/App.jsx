import './App.css';

function App() {

  const name = 'abdul aziz tanvir';
  const person = {name:'tanvir', age:24};
  const link = 'https://mail.google.com/chat/u/0/#chat/home';
  return (
    <div className="App">
      <div className="content">
        <h1>App component</h1>
        <h3>
          my name is {name}
        </h3>
        <p>
          nickname:{person.name} <br />
          age: {person.age}
        </p>
        <p>
          {Math.random()*100}
        </p>
        <p>join <a href={link}>chat</a> </p>
      </div>
    </div>
  );
}

export default App;
