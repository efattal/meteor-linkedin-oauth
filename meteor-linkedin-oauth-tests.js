// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-linkedin-oauth.js.
import { name as packageName } from "meteor/meteor-linkedin-oauth";

// Write your tests here!
// Here is an example.
Tinytest.add('meteor-linkedin-oauth - example', function (test) {
  test.equal(packageName, "meteor-linkedin-oauth");
});
