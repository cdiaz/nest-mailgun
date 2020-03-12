import * as mailgun from "mailgun-js";

export const mailgunProvider = {
  provide: 'mailgun',
  useFactory: async (config) => {
    return await mailgun({
      apiKey: config.get('MAILGUN_APIKEY'),
      domain: config.get('MAILGUN_DOMAIN')
    });
  },
  inject: ['ConfigService']
};