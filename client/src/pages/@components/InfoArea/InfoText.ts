import type { GHActionModel, RWDeploymentModel } from '$/commonTypesWithClient/bubbleModels';
import { actionConclusionToIconStatus } from '$/pages/@hooks/useAppStatus';

// eslint-disable-next-line complexity
export const GithubStatusText = (action: GHActionModel) => {
  const text = actionConclusionToIconStatus(action);
  switch (text) {
    case 'waiting':
      return 'Github作成を待機しています';
    case 'init':
      return 'Githubを初期化しています';
    case 'running':
      return 'Github作成中...';
    case 'success':
      return 'Githubの作成に成功しました';
    case 'failure':
      return 'Githubの作成に失敗しました';
    case 'closed':
      return 'Githubを終了しました';
  }
};

// eslint-disable-next-line complexity
export const RailwayStatusText = (action: RWDeploymentModel) => {
  switch (action.status) {
    case 'BUILDING' && 'SUCCESS':
      return 'Raiyway作成が成功しました。';
    case 'WAITING' && 'DEPLOYING':
      return 'Railway作成待機中';
    case 'CRASHED' && 'FAILED':
      return 'Railway作成失敗';
    case 'INITIALIZING':
      return 'Railway作成を開始します';
    case 'QUEUED':
      return 'Railwayが実行中です。';
    case 'REMOVED' && 'REMOVING' && 'SKIPPED':
      return 'Railway作成は終了しました。';
  }
};
