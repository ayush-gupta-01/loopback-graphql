const app = require("../server/server");
const ds = app.dataSources.ds;

const models = ["User", "AccessToken", "ACL", "RoleMapping", "Role"];

ds.automigrate("author", (err) => {
  if (err) {
    console.log("Something went wrong");
  }
  ds.disconnect();
  process.exit();
});
