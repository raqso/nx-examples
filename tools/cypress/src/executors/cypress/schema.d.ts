import { CypressExecutorOptions } from '@nx/cypress/src/executors/cypress/cypress.impl';

export interface CypressExecutorSchema extends CypressExecutorOptions {
  instances?: number;
} // eslint-disable-line
