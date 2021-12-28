Package.describe({
  name: 'codifytools:linkedin-oauth',
  version: '1.0.3',
  summary: 'Linkedin OAuth flow',
  git: 'https://github.com/codifytools/meteor-linkedin-oauth',
  documentation: null
});

Package.onUse(function(api) {
  api.versionsFrom('2.3');
  api.use('ecmascript');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http@1.4.4 || 2.0.0', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('linkedin-client.js', 'client');
  api.addFiles('linkedin-server.js', 'server');

  api.export('Linkedin');
});