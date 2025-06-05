
import { type HealthCheck } from '../schema';

export const healthCheck = async (): Promise<HealthCheck> => {
  try {
    const timestamp = new Date().toISOString();
    
    return {
      status: 'ok',
      timestamp
    };
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};
