import type { AppModel } from 'commonTypesWithClient/appModels';

export const GithubStatusText = (props: { app: AppModel }) => {
  const text = props.app.status;

  const displaytext = {
    waiting: 'Github作成待機中...',
    init: 'Githubを初期化しています...',
    closed: 'GIthub作成が中断されました',
    running: 'Githubを作成中です...',
    success: 'Github作成に成功しました!',
    failure: 'Github作成に失敗しました...',
  }[text];
  return <div>{displaytext}</div>;
};

export const RailwayStatusText = (props: { app: AppModel }) => {
  const text = props.app.status;

  const displaytext = {
    waiting: 'Railway作成待機中...',
    init: 'Railwayを初期化しています...',
    closed: 'Railway作成が中断されました',
    running: 'Railwayを作成中です...',
    success: 'Railway作成に成功しました!',
    failure: 'Railway作成に失敗しました...',
  }[text];
  return <div>{displaytext}</div>;
};
