import { Environment } from './interface';
import { keys } from './apikey.config';

export const environment: Environment = {
  production: true,
  apiKey: keys.apiKey,
  fbDbUrl: keys.fbDbUrl
};
