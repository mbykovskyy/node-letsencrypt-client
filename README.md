
THIS IS A FORKED REPO. The original repo can be found at [quentinadam/node-letsencrypt-client](https://github.com/quentinadam/node-letsencrypt-client).

This is a modified version of `node-letsencrypt-client` for testing domains against LetsEncrypt authorization service.

DO NOT USE THIS FOR PRODUCTION.

## Installation

Create a private key:

```
openssl genrsa 4096 > account.key
```

Copy a newline-separated list of domains into `domains-list.txt`.

```
npm install
```

## Running

```
node ./index.js | tee output.txt
```
