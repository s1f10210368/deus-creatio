import type { GHActionModel, RWDeploymentModel } from '$/commonTypesWithClient/bubbleModels';
import { actionConclusionToIconStatus } from '$/pages/@hooks/useAppStatus';

// eslint-disable-next-line complexity
export const GithubStatusText = (action: GHActionModel) => {
  const text = actionConclusionToIconStatus(action);
  switch (text) {
    case 'waiting':
      return 'デプロイを待機しています';
    case 'init':
      return 'デプロイを初期化しています';
    case 'running':
      return 'デプロイ作成中...';
    case 'success':
      return 'デプロイに成功しました';
    case 'failure':
      return 'デプロイに失敗しました';
    case 'closed':
      return 'デプロイを終了しました';
    default:
      throw new Error(text satisfies never);
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
    default:
      throw new Error(action.status satisfies never);
  }
};
