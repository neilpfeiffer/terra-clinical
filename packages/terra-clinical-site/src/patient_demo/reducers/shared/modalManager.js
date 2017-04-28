import { disclose, push, pop, defaultState, supportedSizes } from './baseDisclosure';

import {
  DISCLOSE_MODAL,
  DISMISS_MODAL,
  PUSH_MODAL,
  POP_MODAL,
} from '../../actions/shared/modalManager';

const defaultModalState = Object.assign({}, defaultState, {
  size: supportedSizes.small,
});
const modalManager = (state = defaultModalState, action) => {
  switch (action.type) {
    case DISCLOSE_MODAL:
      return Object.assign({}, disclose(state, action), { size: action.data.size || supportedSizes.small });
    case DISMISS_MODAL:
      return defaultModalState;
    case PUSH_MODAL:
      return push(state, action);
    case POP_MODAL:
      return pop(state, action);
    default:
      return state;
  }
};

export default modalManager;
