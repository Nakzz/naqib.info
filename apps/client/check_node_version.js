// Check if the current node version satisfies the required version
const semver = require("semver");
const { node: version } = require("./package").engines;

if (!semver.satisfies(process.version, version)) {
  throw new Error(`The current node version ${process.version} does not satisfy the required version ${version}.`);
}