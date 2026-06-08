import ColorBox from "./ColorBox";
import StudentInfo from "./StudentInfo";

function StudentCard({ name, department, college }) {
  return (
    <ColorBox bgColor="#136ba9">
      <h2>Student Details</h2>
      <StudentInfo label="Name" value={name} />
      <StudentInfo label="Department" value={department} />
      <StudentInfo label="College" value={college} />
    </ColorBox>
  );
}

export default StudentCard;