// const getConfig = require("metro-bundler-config-yarn-workspaces");
// const path = require("path");

// module.exports = getConfig(__dirname, {
//   nodeModules: path.join(__dirname, "../..")
// });

// const blacklist = require("metro-config/src/defaults/blacklist");
// module.exports = {
//   resolver: {
//     blacklistRE: blacklist([/react-native\/local-cli\/core\/__fixtures__.*/])
//   }
// };

try {
  // >= 0.57
  blacklist = require("metro-config/src/defaults/blacklist");
} catch (e) {
  // <= 0.56
  blacklist = require("metro/src/blacklist");
}
