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
    addGame(_, args) {
      const newGame = {
        ...args.game,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      Games.push(newGame);
      return {
        success: true,
        message: "successfully created game",
        newlyAddedData: Games,
      };
    },

    addAuthor(_, args) {
      const newAuthor = {
        ...args.auth,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      Authors.push(newAuthor);
      return {
        success: true,
        message: "successfully created author",
        newlyAddedData: Authors,
      };
    },

    updateGame(_, args) {
      const gameIndex = Games.findIndex((g) => g.id === args.id);
      if (gameIndex !== -1) {
        Games[gameIndex] = { ...Games[gameIndex], ...args.upGame };
        return Games[gameIndex];
      }
      return null;
    },

    updateAuthor(_, args) {
      const AuthIndex = Authors.findIndex((auth) => auth.id === args.id);
      if (AuthIndex !== -1) {
        Authors[AuthIndex] = { ...Authors[AuthIndex], ...args.upAuth };
        return Authors[AuthIndex];
      }
      return null;
    },

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
  },
};

// export default resolvers;
