const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  const firstName = name.split(" ")[0];
  return (
    <div>
      <p>Name: {name}</p>
      <p>First name: {firstName}</p>
      <p>Status: {isStudent ? "Student" : "Not student"}</p>
    </div>
  );
  // TODO: answer here
}

export default App;
export { Student };
