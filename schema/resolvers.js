// import AllData from "../AllData.js"
import { Games, Authors } from "../_db.js";

export const resolvers = {
  Query: {
    games() {
      return Games;
    },
    game(_, args) {
      return Games.find((gam) => gam.id === args.id);
    },
    authors() {
      return Authors;
    },
    author(_, args) {
      return Authors.find((auth) => auth.id === args.id);
    },
  },
};

// export default resolvers;
