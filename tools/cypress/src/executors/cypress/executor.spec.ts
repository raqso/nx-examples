import { ExecutorContext } from '@nx/devkit';

import { CypressExecutorSchema } from './schema';
import executor from './executor';

const options: CypressExecutorSchema = {};
const context: ExecutorContext = {
  root: '',
  cwd: process.cwd(),
  isVerbose: false,
};

describe('Cypress Executor', () => {
  it('can run', async () => {
    const output = await executor(options, context);
    expect(output.success).toBe(true);
  });
});
