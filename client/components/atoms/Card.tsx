const Card: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center items-center w-5/6 shadow-xl bg-white border rounded-lg p-16 mb-16">
      {children}
    </div>
  );
};

export default Card;
