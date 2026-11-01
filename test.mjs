import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './add.mjs';
test('add returns the sum', () => assert.equal(add(2, 3), 5));
test('add accepts negatives', () => assert.equal(add(-2, -3), -5));
