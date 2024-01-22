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
      return 'デプロイ中...';
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
      return 'Raiywayとの連携が成功しました。';
    case 'WAITING' && 'DEPLOYING':
      return 'Railwayとの連携を待機中';
    case 'CRASHED' && 'FAILED':
      return 'Railwayとの連携失敗';
    case 'INITIALIZING':
      return 'Railwayとの連携を開始します';
    case 'QUEUED':
      return 'Railwayとの連携を実行中です。';
    case 'REMOVED' && 'REMOVING' && 'SKIPPED':
      return 'Railwayとの連携は終了しました。';
  }
};
