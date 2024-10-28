import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase())
                    return action.payload === 'up' ? -1 : 1
                else if (a.name.toLowerCase() > b.name.toLowerCase())
                    return action.payload === 'up' ? 1 : -1
                return 0
            }) // need to fix
        }
        case 'check': {
            return state.filter((u) => u.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
