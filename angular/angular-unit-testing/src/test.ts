import 'zone.js/dist/zone-testing';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy'; // run tests in fake async zone and
import 'zone.js.dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

declare const __karma__: any;
declare const require: any;

// prevent karma from running prematurely
__karma__.loaded = function () {};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

const context = require.context('./', true, /\.spec\.ts$/);
// load the module
context.keys().map(context);
// start karma to run the test
__karma__.start();
