const PinnedItemCard: React.FC = ({ children }) => {
  return (
    <div className="w-3/4 shadow-xl bg-white border rounded-lg p-8 m-8">
      {children}
    </div>
  );
};

export default PinnedItemCard;
