import { PINNEDITEMS_QUERY } from "../common/Query";
import { PINNEDITEM, PINNEDITEMS } from "../common/Types";
import PinnedItem from "../components/templates/PinnedItem";
import { getClient } from "../hooks/getClient";

const PinnedItemsPage: React.FC<PINNEDITEMS> = ({ pinnedItems }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 pt-16">
      {pinnedItems &&
        pinnedItems.map((pinnedItem: PINNEDITEM, index) => {
          return <PinnedItem key={index} {...pinnedItem.node} />;
        })}
    </div>
  );
};

export default PinnedItemsPage;

/**
 * ピン留めしているitemを取得してリターンしている
 * @returns - pinnedItems(ピン留めしてるプロジェクト)
 */
export const getStaticProps = async () => {
  const client = getClient();
  const { data } = await client.query({
    query: PINNEDITEMS_QUERY,
    variables: { user: "kosuke-17" },
  });

  const { user } = data;
  // ピン留めしたプロジェクトをオブジェクトとして格納
  const pinnedItems: PINNEDITEMS = user.pinnedItems.edges.map(
    (node: PINNEDITEM) => {
      return node;
    }
  );

  return {
    props: { pinnedItems },
  };
};
