import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './add.mjs';
test('API exists', () => assert.equal(typeof add, 'function'));
