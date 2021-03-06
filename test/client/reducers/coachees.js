/* eslint no-unused-expressions: 0 */
/* global beforeEach, describe, it, expect, sinon */
import reducer, { initialState } from 'app/client/reducers/coachees';

describe('reducers', () => {
  describe('coachees', () => {
    it('should return its default state when called without state', () => {
      const state = reducer(undefined, {});

      expect(state).to.deep.equal(initialState);
    });

    it('should return the state unchanged when called without an action it does not handle', () => {
      const state = reducer({ foo: 'bar' }, {});

      expect(state).to.deep.equal({ foo: 'bar' });
    });

    it('should return the state with loading set to true when called with a COACHEE_LOADING action', () => {
      const state = reducer({}, { type: 'COACHEE_READY', ready: true });

      expect(state).to.deep.equal({ ready: true });
    });

    it('should return the state with the action.coachees as items when called with a COACHEE_CHANGED action', () => {
      const state = reducer({}, { type: 'COACHEE_CHANGED', data: { foo: 'bar' } });

      expect(state).to.deep.equal({ current: { foo: 'bar'} });
    });

    it('should return the state with loading set to true when called with a COACHEES_LOADING action', () => {
      const state = reducer({}, { type: 'COACHEES_READY', ready: true });

      expect(state).to.deep.equal({ ready: true });
    });

    it('should return the state with the action.coachees as items when called with a COACHEES_CHANGED action', () => {
      const state = reducer({}, { type: 'COACHEES_CHANGED', data: [{ foo: 'bar' }] });

      expect(state).to.deep.equal({ items: [{ foo: 'bar'}] });
    });
  });
});
