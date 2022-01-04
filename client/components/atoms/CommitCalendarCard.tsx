import React from "react";

const CommitCalendarCard: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center">
      <span className="border rounded p-4">{children}</span>
    </div>
  );
};

export default CommitCalendarCard;
