// import AllData from "../AllData.js"
import {Games,Authors} from '../_db.js'

export const resolvers = {
    Query:{
        games(){
            return Games
        },
        authors(){
            return Authors
        },
        game(_,args){
            return Games.find((gam)=>gam.id === args.id)
        }
        }
}

// export default resolvers;