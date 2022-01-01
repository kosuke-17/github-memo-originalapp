const GraphCard: React.FC = ({ children }) => {
  return (
    <div className="flex justify-center items-center">
      <div className=" lg:h-auto lg:w-1/2 md:w-3/5 sm:w-1/3 shadow-xl bg-white border rounded-lg lg:p-10 md:p-4 sm:p-1">
        {children}
      </div>
    </div>
  );
};

export default GraphCard;
