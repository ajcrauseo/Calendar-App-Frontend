import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';

describe('Pruebas en fetch de los helpers', () => {
  let token = '';

  test('fetchWithoutToken debe de funcionar', async () => {
    const resp = await fetchWithoutToken(
      'auth',
      {
        email: 'antonycabeza@gmail.com',
        password: 'totiChulo123',
      },
      'POST',
    );

    const body = await resp.json();

    expect(resp instanceof Response).toBe(true);
    expect(body.ok).toBe(true);

    token = body.token;
  });

  test('fetchWithToken debe de funcionar', async () => {
    localStorage.setItem('token', token);

    const resp = await fetchWithToken('events/123', {}, 'DELETE');
    const body = await resp.json();

    expect(body.ok).toBe(false);
    expect(body.msg).toEqual('Invalid event id');
  });
});
