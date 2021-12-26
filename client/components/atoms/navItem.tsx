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
        <a>
          <span className="text-xl">
            {icon}
            {text}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default NavItem;
