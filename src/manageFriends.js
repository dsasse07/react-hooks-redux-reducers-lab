export function manageFriends(state = {friends: []}, action) {

  switch (true){
    case (action.type === "friends/add"):
      return {friends: [...state.friends, action.payload] }
    case (action.type === "friends/remove"):
      return {friends: state.friends.filter(friend => friend.id !== action.payload)}
    default:
      return state
  }

}
