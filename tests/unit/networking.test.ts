import wireMockClient from '../wireMockClient';

test('defaults', async () => {
  const { adapter, client } = wireMockClient();

  adapter.onGet('/customers').reply(200, {
    _embedded: {
      customers: [],
    },
    count: 0,
    _links: {
      documentation: {
        href: 'https://docs.mollie.com/reference/v2/customers-api/list-customers',
        type: 'text/html',
      },
      self: {
        href: 'https://api.mollie.com/v2/customers?limit=50',
        type: 'application/hal+json',
      },
      previous: null,
      next: null,
    },
  });

  await client.customers.all();

  const { baseURL, headers, httpsAgent } = adapter.history.get[0];

  // Test previously named "it should have a secure baseURL set".
  expect(baseURL).toBe('https://api.mollie.com:443/v2/');

  // Test previously named "it should have some default headers set".
  expect(headers['Authorization']).toBe('Bearer mock-api-key');
  expect(/^Node\/[v\d\.]+ Mollie\/[v\d\.]+(?:-[\w\.]+)?$/i.test(headers['User-Agent'])).toBe(true);
  expect(headers['Accept-Encoding']).toBe('gzip');
  expect(headers['Content-Type']).toBe('application/json');

  // Test previously named "it should have a custom httpsAgent with cert loaded".
  expect(httpsAgent).toBeTruthy();
});

async function requestWithVersionStrings(versionStrings) {
  const { adapter, client } = wireMockClient(versionStrings);

  adapter.onGet('/customers').reply(200, {
    _embedded: {
      customers: [],
    },
    count: 0,
    _links: {
      documentation: {
        href: 'https://docs.mollie.com/reference/v2/customers-api/list-customers',
        type: 'text/html',
      },
      self: {
        href: 'https://api.mollie.com/v2/customers?limit=50',
        type: 'application/hal+json',
      },
      previous: null,
      next: null,
    },
  });

  await client.customers.all();

  return adapter.history.get[0];
}

test('customVersionStrings', async () => {
  // Test previously named "it should add a version string".
  let headers = (await requestWithVersionStrings('ReactionCommerce/1.16.0')).headers;

  expect(headers['User-Agent'].endsWith('ReactionCommerce/1.16.0')).toBe(true);

  // Test previously named "it should accept a version string with whitespace".
  headers = (await requestWithVersionStrings('Reaction Commerce/1.16.0')).headers;

  expect(headers['User-Agent'].endsWith('ReactionCommerce/1.16.0')).toBe(true);

  // Test previously named "it should not camelCase all uppercase version strings".
  headers = (await requestWithVersionStrings('PHP/7.3.4')).headers;

  expect(headers['User-Agent'].endsWith('PHP/7.3.4')).toBe(true);

  // Test previously named "it should not camelCase all uppercase version strings with whitespace".
  headers = (await requestWithVersionStrings('PHP COOKBOOK FOR NODE USERS/7.3.4')).headers;

  expect(headers['User-Agent'].endsWith('PHPCOOKBOOKFORNODEUSERS/7.3.4')).toBe(true);

  headers = (await requestWithVersionStrings('php cookbook for node users/7.3.4')).headers;

  expect(headers['User-Agent'].endsWith('phpCookbookForNodeUsers/7.3.4')).toBe(true);
});
