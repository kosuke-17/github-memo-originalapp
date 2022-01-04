import React from "react";
import { CommitCalendarCard } from "../../common/Types";

const CommitCalendarCard: React.FC<CommitCalendarCard> = ({
  children,
  dayColor,
}) => {
  return (
    <div className="flex">
      <span
        className="border rounded p-2 hover:opacity-60"
        style={{ backgroundColor: dayColor }}
      >
        {children}
      </span>
    </div>
  );
};

export default CommitCalendarCard;
