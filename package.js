Package.describe({
  name: 'simple:rest',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  Npm.depends({
    connect: "2.11.0",
    "connect-route": "0.1.5"
  });

  api.use([
    "underscore",
    "cfs:http-methods",
    "ddp",
    "meteor",
    "webapp",
    "accounts-password"
  ], "server");

  api.addFiles([
    'dead-simple-rest.js',
    'http-login.js',
    'http-connection.js',
    'http-subscription.js'
  ], "server");

  api.addFiles('rest.js', "server");
});

Package.onTest(function(api) {
  api.use("accounts-password");
  api.use("underscore");
  api.use("test-helpers");
  api.use("mongo");
  api.use("random");
  api.imply("http");
  api.use('tinytest');
  api.use('simple:rest');
  api.addFiles('http-login-tests.js');
  api.addFiles('rest-tests.js');
});
