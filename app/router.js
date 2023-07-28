import EmberRouter from '@ember/routing/router';
import config from 'ember-router-service-test/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('redirect-to-home');
  this.route('other-page');
});
