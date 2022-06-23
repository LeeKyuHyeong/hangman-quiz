import React from "react";

const students = [
  {
    name: "KH",
  },
  {
    name: "SJ",
  },
  {
    name: "GJ",
  },
  {
    name: "KH",
  },
]

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={index}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;