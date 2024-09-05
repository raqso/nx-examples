import { nxE2EPreset as nxE2EPresetLib } from '@nx/cypress/plugins/cypress-preset';
import * as cypressSplit from 'cypress-split';

export const nxE2EPreset: typeof nxE2EPresetLib = (pathToConfig, options) => {
  const presetResult = nxE2EPresetLib(pathToConfig, options);

  return {
    ...presetResult,
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      presetResult.setupNodeEvents(on, config);

      // // IMPORTANT: return the config object
      return config;
    },
  };
};
