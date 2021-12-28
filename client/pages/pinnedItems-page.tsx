import { PINNEDITEMS_QUERY } from "../common/Query";
import { PINNEDITEM, PINNEDITEMS } from "../common/Types";
import PinnedItem from "../components/templates/PinnedItem";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

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

export const getStaticProps = async () => {
  const httpLink = createHttpLink({ uri: process.env.GRAPHQL_ENDPOINT });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    };
  });
  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
  const LOGINUSERNAME = "kosuke-17";
  const { data } = await client.query({
    query: PINNEDITEMS_QUERY,
    variables: { user: LOGINUSERNAME },
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
