import board from './board';
import card from './card';
import cardEvent from './card-event';
import column from './column';
import { registerModel } from '../model-registry';
import user from './user';

registerModel('board', board);
registerModel('column', column);
registerModel('card', card);
registerModel('cardEvent', cardEvent);
registerModel('user', user);
