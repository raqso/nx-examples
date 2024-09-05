import { PromiseExecutor } from '@nx/devkit';
import cypressExecutor from '@nx/cypress/src/executors/cypress/cypress.impl';

import { CypressExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<CypressExecutorSchema> = async (
  options,
  context
) => {
  const instances = options.instances || 1;

  if (instances < 2) {
    return cypressExecutor(options, context);
  }

  const workers = await Promise.all(
    Array(instances)
      .fill(null)
      .map((_, splitIndex) =>
        cypressExecutor(
          {
            ...options,
            trashAssetsBeforeRuns: false, // https://github.com/bahmutov/cypress-split/blob/main/README.md?plain=1#L205
            skipServe: splitIndex !== 0,
            devServerTarget: splitIndex !== 0 ? null : options.devServerTarget,
            env: {
              ...options.env,
              split: `${instances}`,
              splitIndex: `${splitIndex}`,
            },
          },
          context
        )
      )
  );

  const success = workers.every(({ success }) => success);
  return { success };
};

export default runExecutor;
