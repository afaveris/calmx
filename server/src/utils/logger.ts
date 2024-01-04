import { configure, getLogger } from 'log4js';

export const logger = (config: JSON.JSONValue) => {
  configure(config);
  return {
    serverLogger: getLogger('[SERVER]'),
    dataLogger: getLogger('[DATA]'),
    businessLogger: getLogger('[BUSINESS]'),
    presentationLogger: getLogger('[PRESENTATION]'),
  };
};
