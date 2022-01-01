import Link from "next/link";
import { GRAPHTABS } from "../../common/GRAPHTABS";
import { GRAPHTAB } from "../../common/Types";

const GraphTabCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex w-full lg:h-auto">
        {GRAPHTABS.map((tab: GRAPHTAB, index) => {
          return (
            <Link href={tab.link} key={index}>
              <a className="px-8 py-2 text-black text-3xl hover:cursor-pointer hover:text-gray-400 shadow-xl border rounded-lg">
                {tab.text}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GraphTabCard;
