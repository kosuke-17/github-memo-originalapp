import { Key } from "react";

/**
 * ピン留めされているプロジェクトの型定義
 */
// ---------------------------------------
export interface PINNEDITEMS {
  pinnedItems: [PINNEDITEM];
}
export interface PINNEDITEM {
  __typename: string;
  node: PINNEDITEM_NODE;
}

export interface PINNEDITEM_NODE {
  id: Key;
  name: string;
  url: string;
  createdAt: string;
  languages: {
    __typename: string;
    edges: [ITEM_LANGUAGE_EDGE];
  };
}

export interface ITEM_LANGUAGE_EDGE {
  node: { id: string; name: string; color: string };
}
// ---------------------------------------
