const { createContext } = require("react");

const UserContext = createContext({
  loggedInUser: "Guest",
});

export default UserContext;
