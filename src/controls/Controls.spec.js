import React from 'react';
import { toBeDisabled } from 'jest-dom';
import { render } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

expect.extend({ toBeDisabled });

describe('Control component tests', () => {});
