if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = "production";
}
require("./dist/index.js");
