import Ember from 'ember';

var Router = Ember.Router.extend({
  location: BlogENV.locationType
});

Router.map(function() {
  this.route('home');
  this.route('about');
  this.route('contact');
});

export default Router;
