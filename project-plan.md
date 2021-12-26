## フロント技術選定(目的は流行を取り入れることでなくビジネス上の問題を解決すること)

jam→JavaScript/APIs/Markup
Jamstack の特徴としてパフォーマンスの高さとセキュリティの高さ
今回は JAMstack にしない。
理由：ブログや LP の作成に向いているため、動的データが存在するプロジェクトに向いてない。

- nextjs(ssr)
  - SSR 用に getServerSideProps を利用
  - ISR や CSR なども検討した。
    理由
    - ページに動的なデータがそこまで含まれてない
    - 整合性を強めたい

[SSR 参考](https://nextjs.org/docs/basic-features/pages)

[GitHub GraphQL API](https://docs.github.com/en/graphql/overview/explorer)

[GraphQL API Explorer 参考記事](https://dev.classmethod.jp/articles/try-graphiql/)

- GraphQL

  - GraphQL API Explorer を使用して query を実行
    理由
  - 少ないリクエストで複数のリソースにアクセス可能
  - 最小限のデータのみを取得
  - 既存のクエリを残しつつ API の更新が可能

Rest だとエンドポイントが肥大化してしまうためバージョン管理などが難しくなる

- nodejs(できれば Typescript)
- フロントとバックエンドの言語の違いによる認知負荷が大きいので js のみで書く

- ant desgin(UI フレームワーク)
