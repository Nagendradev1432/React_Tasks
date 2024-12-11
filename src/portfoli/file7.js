import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

function List() {
  return (
    <div>
      {[
        { name: "HTML", progress: 100, variant: "success" },
        { name: "CSS", progress: 100,variant: "info" },
        { name: "Bootstrap", progress: 100, variant: "warning" },
        { name: "JavaScript", progress: 90, variant: "danger" },
        { name: "React", progress: 60, variant: "success" },
        { name: "Angular", progress: 50, variant: "info" },
      ].map((skill, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            gap: "30px",
            padding:"10px 10px",
            marginLeft:"40px"
          }}
        >
          <h4 style={{ width: "80px", margin: "0" }}>{skill.name}</h4>
          <ProgressBar
            style={{ flex: 1 }}
            variant={skill.variant}
            now={skill.progress}
            label={`${skill.progress}%`}
          />
        </div>
      ))}
    </div>
  );
}

export default List;
