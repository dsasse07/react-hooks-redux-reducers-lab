


export function managePresents(state = {"numberOfPresents": 0}, action) {
  switch (true){
    case (action.type === "presents/increase"):
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state
  }
}
