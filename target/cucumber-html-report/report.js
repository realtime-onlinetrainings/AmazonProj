$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/automation/featureFiles/NaukriReg.feature");
formatter.feature({
  "name": "Register Naukri user",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@testNaukri"
    }
  ]
});
formatter.scenarioOutline({
  "name": "verify gmail accounts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatePolicyName"
    }
  ]
});
formatter.step({
  "name": "I am at the naukri Login screen",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on I am a professional",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Name as \u003cName\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter EmailId as \u003cemail\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I enter Password as \u003cPassword\u003e",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Name",
        "email",
        "Password"
      ]
    },
    {
      "cells": [
        "chandrahasm",
        "rama.mullamgdfdsffdfdsdf@gmail.com",
        "Pass@1389"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verify gmail accounts",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@testNaukri"
    },
    {
      "name": "@CreatePolicyName"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at the naukri Login screen",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefs.i_am_at_the_naukri_screen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on I am a professional",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_click_on_i_am_a_professioanl()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Name as chandrahasm",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_enter_name_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter EmailId as rama.mullamgdfdsffdfdsdf@gmail.com",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.i_enter_emailId_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter Password as Pass@1389",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefs.I_enter_Password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});