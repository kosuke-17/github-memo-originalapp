const HumbergerMenu: React.FC = () => {
  const INGREDIENTS = "border border-gray-800 w-5 m-2";
  return (
    <div className="flex justify-center items-center rounded-md border-2 border-neutral-800 w-6 h-6 p-6 hover:bg-gray-200">
      <div>
        <div className={INGREDIENTS}></div>
        <div className={INGREDIENTS}></div>
        <div className={INGREDIENTS}></div>
      </div>
    </div>
  );
};

export default HumbergerMenu;
