// import AllData from "../AllData.js"
import {Games,Authors} from '../_db.js'

export const resolvers = {
    Query:{
        games(){
            return Games
        },
        authors(){
            return Authors
        }
        }
}

// export default resolvers;