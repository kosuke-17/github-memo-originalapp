import Header from "./templates/Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="flex flex-1 justify-center items-center flex-col w-screen md:h-screen lg:h-screen bg-slate-100 sm:pt-16">
        {children}
      </main>
    </div>
  );
};

export default Layout;
