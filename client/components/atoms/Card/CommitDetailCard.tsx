import React from "react";
import { CommitCalendarCard } from "../../../common/Types";

const CommitDetailCard: React.FC<CommitCalendarCard> = ({ children }) => {
  return (
    <div className="flex">
      <span className="border rounded p-2 hover:opacity-60">{children}</span>
    </div>
  );
};

export default CommitDetailCard;
