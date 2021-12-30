import { Key } from "react";

/**
 * ピン留めされているプロジェクトの型定義
 */
// ---------------------------------------
export type PINNEDITEMS = {
  pinnedItems: [PINNEDITEM];
};
export type PINNEDITEM = {
  __typename: string;
  node: PINNEDITEM_NODE;
};

export type PINNEDITEM_NODE = {
  id: Key;
  name: string;
  url: string;
  createdAt: string;
  languages: {
    __typename: string;
    edges: [ITEM_LANGUAGE_EDGE];
  };
};

export type ITEM_LANGUAGE_EDGE = {
  node: { id: string; name: string; color: string };
};
// ---------------------------------------

/**
 * コミットデータの型定義
 */
// ---------------------------------------
export type CONTRIBUTIONCALENDARWEEKS = {
  contributionCalendarWeeks: [CONTRIBUTIONDAYS];
};

export type WEEK = {
  contributionDays: [CONTRIBUTIONDAY];
};

export type CONTRIBUTIONDAYS = [CONTRIBUTIONDAY];
export type CONTRIBUTIONDAY = {
  __typename: string;
  contributionCount: number;
  date: string;
};

export type DAY = {
  contributionCount: number;
};
// ---------------------------------------
