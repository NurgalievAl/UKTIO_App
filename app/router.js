import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('u-k-t-i-o-app-dolzhnost-l');
  this.route('u-k-t-i-o-app-dolzhnost-e',
  { path: 'u-k-t-i-o-app-dolzhnost-e/:id' });
  this.route('u-k-t-i-o-app-dolzhnost-e.new',
  { path: 'u-k-t-i-o-app-dolzhnost-e/new' });
  this.route('u-k-t-i-o-app-oborudovanie-l');
  this.route('u-k-t-i-o-app-oborudovanie-e',
  { path: 'u-k-t-i-o-app-oborudovanie-e/:id' });
  this.route('u-k-t-i-o-app-oborudovanie-e.new',
  { path: 'u-k-t-i-o-app-oborudovanie-e/new' });
  this.route('u-k-t-i-o-app-organizaciya-l');
  this.route('u-k-t-i-o-app-organizaciya-e',
  { path: 'u-k-t-i-o-app-organizaciya-e/:id' });
  this.route('u-k-t-i-o-app-organizaciya-e.new',
  { path: 'u-k-t-i-o-app-organizaciya-e/new' });
  this.route('u-k-t-i-o-app-sotrudnik-l');
  this.route('u-k-t-i-o-app-sotrudnik-e',
  { path: 'u-k-t-i-o-app-sotrudnik-e/:id' });
  this.route('u-k-t-i-o-app-sotrudnik-e.new',
  { path: 'u-k-t-i-o-app-sotrudnik-e/new' });
  this.route('u-k-t-i-o-app-tip-oborudovaniya-l');
  this.route('u-k-t-i-o-app-tip-oborudovaniya-e',
  { path: 'u-k-t-i-o-app-tip-oborudovaniya-e/:id' });
  this.route('u-k-t-i-o-app-tip-oborudovaniya-e.new',
  { path: 'u-k-t-i-o-app-tip-oborudovaniya-e/new' });
  this.route('login');
});

export default Router;
