import { useState } from "react";

function ToggleNote() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide Note" : "Show Note"}
      </button>

      {visible && (
        <p>Please submit your assignment on time</p>
      )}
    </div>
  );
}

export default ToggleNote;