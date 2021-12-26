const Card: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center items-center  max-w-2xl h-96 w-5/6 shadow-xl bg-white border rounded-lg p-2">
      {children}
    </div>
  );
};

export default Card;
