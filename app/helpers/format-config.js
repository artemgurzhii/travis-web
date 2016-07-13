import Ember from 'ember';
import { safe, formatConfig as formatConfigHelper } from 'travis/utils/helpers';

export function safeFormatConfig(config, options) {
  console.log(config);
  return JSON.stringify(config);
}

export default Ember.Helper.helper(safeFormatConfig);
