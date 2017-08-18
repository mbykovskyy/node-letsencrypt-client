var FS = require("fs");
var LetsEncryptClient = require("./lib/ACMEClient");

var accountKey = FS.readFileSync("account.key");
var client = new LetsEncryptClient(accountKey);

client.register()
.then(() => {
  var domains = FS.readFileSync("domains-list.txt", "utf8").split("\n");

  domains.reduce((promise, domain) => {
    return promise.then(() => {
      return verifyDomain(domain);
    });
  }, Promise.resolve());
})
.catch((error) => {
  console.log(error);
});

function verifyDomain(domain) {
  return client.requestAuthorization(domain).then((challenge) => {
      console.log(domain + " OK");

      // Clear pending authorization
      client.triggerChallenge(challenge);
  }).catch((error) => {
      console.log(domain + " " + error.message);
  });
}
