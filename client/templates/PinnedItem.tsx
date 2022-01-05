import React from "react";
import { PINNEDITEM_NODE, ITEM_LANGUAGE_EDGE } from "../common/Types";
import PinnedItemCard from "../components/atoms/Card/PinnedItemCard";
import Link from "next/link";
import moment from "moment";

const PinnedItem: React.FC<PINNEDITEM_NODE> = ({
  id,
  name,
  createdAt,
  languages,
  url,
}) => {
  return (
    <PinnedItemCard key={id}>
      <div className="text-2xl">{name}</div>
      <div>開始日:{moment(createdAt).format("YYYY/MM/DD")}</div>
      <div>
        <div className="flex flex-wrap">
          {languages.edges.map((edge: ITEM_LANGUAGE_EDGE) => {
            return (
              <div
                key={edge.node.id}
                className="px-2  border rounded-md"
                style={{ color: edge.node.color }}
              >
                {edge.node.name}
              </div>
            );
          })}
        </div>
        <Link href={url}>
          <a>
            <div className="pt-2">コードを見る</div>
          </a>
        </Link>
      </div>
    </PinnedItemCard>
  );
};

export default PinnedItem;
