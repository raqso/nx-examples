import { PromiseExecutor } from '@nx/devkit';
import cypressExecutor from '@nx/cypress/src/executors/cypress/cypress.impl';
import { CypressExecutorSchema } from './schema';

const runExecutor: PromiseExecutor<CypressExecutorSchema> = async (
  options,
  context
) => {
  console.log('Executor ran for Cypress', options);

  return  cypressExecutor(options, context);
};

export default runExecutor;
