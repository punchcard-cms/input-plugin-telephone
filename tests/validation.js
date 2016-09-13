import test from 'ava';
import validation from '../lib/validation';

const input = {
  target: {
    name: 'telephone',
    value: '2125551212',
  },
};

const settings = {
  target: {
    locale: '',
  },
};

const badInput = {
  target: {
    name: 'telephone',
    value: '22125551212',
  },
};

const britInput = {
  target: {
    name: 'telephone',
    value: '07888814488',
  },
};

const britSettings = {
  target: {
    locale: 'en-GB',
  },
};

// Valid input
test('valid input', t => {
  t.true(validation(input, settings), 'Valid input returns true');
});

// Valid input
test('bad input', t => {
  t.is(validation(badInput, settings), 'telephone must be a phone number', 'Bad phone number returns error string');
});

// Valid input
test('accepts non-us locales', t => {
  t.true(validation(britInput, britSettings), 'Other country numbers are tested');
});
