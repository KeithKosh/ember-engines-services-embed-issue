import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'engine-service-sharing/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;

  engines = {
    'my-routeable-engine': {
      dependencies: {
        services: ['my-service'],
      },
    },
    'my-routeless-engine': {
      dependencies: {
        services: ['my-service'],
      },
    },
  };
}

loadInitializers(App, config.modulePrefix);
