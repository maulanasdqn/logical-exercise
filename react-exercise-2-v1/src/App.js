const App = () => {
  return (
    <div>
      <Student name={"Djarot Purnomo"} isStudent={true} />
    </div>
  );
};

function Student({ name, isStudent }) {
  return (
    <>
      <p className="fullName">Name: {name}</p>
      <p className="firstName">
        First name: {name.split(" ").splice(0, 1).join("")}
      </p>
      <p className="status">Status: {isStudent ? "Student" : "Not student"}</p>
    </>
  );
}

export default App;
export { Student };
