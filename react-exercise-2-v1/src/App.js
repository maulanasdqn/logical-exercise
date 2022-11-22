const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const firstName = name.split(" ");
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>First name: {firstName[0]}</h1>
      <h1>Status: {isStudent ? "Student" : "Not student"}</h1>
    </div>
  );
}

export default App;
export { Student };
