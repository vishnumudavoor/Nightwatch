const seleniumServer = require('selenium-server');

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'features/step_definitions',
    '--format', 'node_modules/cucumber-pretty',
    '--format', 'json:reports/cucumber.json',
    'features']
    
});

module.exports = {
  output_folder: 'reports',
  selenium: {
    start_process: true,
    server_path: 'lib\\selenium-server-standalone-3.0.1.jar',
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': 'lib/chromedriver.exe'
    }
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      desiredCapabilities: {
        browserName: 'chrome',
        "chromeOptions" : {
          "args" : ["start-maximized"]
        },
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    
      
    }
  }
};
