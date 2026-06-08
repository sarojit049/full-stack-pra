import StudentCard from "./StudentCard";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Week 2 Assignment</h1>

    <h3>QUESTION-1</h3>
      <StudentCard
        name="Saroj Kumar"
        department="Information Technology"
        college="MCKV Institute of Engineering"
      />
    <h3 >QUESTION-2</h3>
      <Counter />
    </div>
  );
}

export default App;