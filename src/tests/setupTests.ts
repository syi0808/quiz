import 'ts-node/register';
import '@testing-library/jest-dom';
import { server } from '@/mocks/node';
import { afterAll, afterEach, beforeAll } from '@jest/globals';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
