
import { describe, expect, it } from 'bun:test';
import { healthCheck } from '../handlers/health_check';

describe('healthCheck', () => {
  it('should return health status', async () => {
    const result = await healthCheck();

    expect(result.status).toEqual('ok');
    expect(result.timestamp).toBeDefined();
    expect(typeof result.timestamp).toBe('string');
    
    // Verify timestamp is a valid ISO string
    const timestamp = new Date(result.timestamp);
    expect(timestamp).toBeInstanceOf(Date);
    expect(timestamp.getTime()).not.toBeNaN();
  });

  it('should return current timestamp', async () => {
    const before = new Date();
    const result = await healthCheck();
    const after = new Date();

    const resultTimestamp = new Date(result.timestamp);
    
    expect(resultTimestamp.getTime()).toBeGreaterThanOrEqual(before.getTime());
    expect(resultTimestamp.getTime()).toBeLessThanOrEqual(after.getTime());
  });

  it('should return consistent status', async () => {
    const result1 = await healthCheck();
    const result2 = await healthCheck();

    expect(result1.status).toEqual('ok');
    expect(result2.status).toEqual('ok');
  });
});
