import { types } from '../../types/types';

describe('Pruebas en types', () => {
  test('Los types deben de ser iguales', () => {
    expect(types).toEqual({
      uiOpenModal: '[ui] Open Modal',
      uiCloseModal: '[ui] Close Modal',

      eventSetActive: '[calendar] Set active',
      eventStartAddNew: '[calendar] Start add new',
      eventAddNew: '[calendar] Add new',
      clearActiveEvent: '[calendar] Clear active event',
      eventUpdated: '[calendar] Event updated',
      eventDeleted: '[calendar] Event deleted',
      eventLoaded: '[calendar] Events loaded',
      eventLogout: '[calendar] Events logout',

      authCheckingFinish: '[auth] Finish checking login state',
      authStartLogin: '[auth] Start login',
      authLogin: '[auth] Login',
      authStartRegister: '[auth] Start register',
      authStartTokenRenew: '[auth] Start token renew',
      authLogout: '[auth] Logout',
    });
  });
});
