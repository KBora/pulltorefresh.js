import _ptrMarkup from './markup';
import _ptrStyles from './styles';

export default {
  distThreshold: 60,
  distMax: 80,
  distReload: 50,
  distIgnore: 0,
  mainElement: 'body',
  triggerElement: 'body',
  ptrElement: '.ptr',
  classPrefix: 'ptr--',
  cssProp: 'min-height',
  iconArrow: '<i class="fa-redo far fas has-text-primary"></i>',
  iconRefreshing: '<icon class="rds-icon icon-rds-points has-text-primary"></icon>',
  instructionsPullToRefresh: 'Pull down to refresheee',
  instructionsReleaseToRefresh: 'Release to refreshooo',
  instructionsRefreshing: 'Refreshingaaa',
  refreshTimeout: 500,
  getMarkup: () => _ptrMarkup,
  getStyles: () => _ptrStyles,
  onInit: () => {},
  onRefresh: () => location.reload(),
  resistanceFunction: t => Math.min(1, t / 2.5),
  shouldPullToRefresh: () => !window.scrollY,
};
