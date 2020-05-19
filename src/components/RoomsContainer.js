import React from 'react'
import RoomsFilter from './RoomsFilter.js'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading.js'

function RoomContainer({context}){
    const {loading, sortedRooms, rooms} = context;
    
    if(loading){
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms}/>
        </>
    )
}

export default withRoomConsumer(RoomContainer)

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
                    
//                     if(loading){
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             Hello from Rooms Container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
