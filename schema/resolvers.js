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
  Mutation: {
    deleteGame(_, args) {
      try {
        const updatedGames = Games?.filter((game) => {
          return game.id !== args.id;
        });
        return { success: true, message: "successfully deleted", updatedGames };
      } catch (err) {
        return {
          success: false,
          message: "error on deleting",
        };
      }
    },
    deleteAuthor(_, args) {
      const updatedAuthors = Authors?.filter((auth) => auth.id !== args.id);
      return { success: true, message: "successfully deleted", updatedAuthors };
    },
    addGame(_, args) {
      const newGame = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      Games.push(newGame);
      return Games;
    },
  },
};

// export default resolvers;
