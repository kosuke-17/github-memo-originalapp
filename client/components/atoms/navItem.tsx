import Link from "next/link";

interface NAVITEM {
  text: string;
  icon: JSX.Element;
  link: string;
}

const NavItem: React.FC<NAVITEM> = ({ text, icon, link }) => {
  return (
    <div>
      <Link href={link}>
        <a className="text-black text-xl hover:text-gray-400">
          {icon}
          {text}
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
