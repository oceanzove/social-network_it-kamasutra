const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        {id: 0, followed: true, ico: 'https://i.pinimg.com/736x/79/9a/f8/799af8f3e8a9743b563d39b2bc8d40c7.jpg', fullName: 'zove', status: 'glow up', location: {city: 'Kurgan', country: 'Russia'}},
        {id: 1, followed: true, ico: "https://i.pinimg.com/564x/59/78/51/597851f6d8f77eec967b9e940d61355c.jpg", fullName: 'Hamster778', status: 'Ho ho, i`m playing word of tanks', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 2, followed: true, ico: "https://i.pinimg.com/564x/05/3e/46/053e46fc877d81873c1351650100b3f0.jpg", fullName: 'PrincessDao', status: 'Yeah, i`m killjoy', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 3, followed: true, ico: "https://i.pinimg.com/564x/97/a1/6f/97a16f4977904694f6ea5e4c9be271da.jpg", fullName: 'Dew', status: 'goodly', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 4, followed: true, ico: "https://i.pinimg.com/564x/a5/b3/a4/a5b3a4517120532da4057942a56bf6c2.jpg", fullName: 'Death', status: 'work to fabric', location: {city: 'Novosibirsk', country: 'Russia'}},
        {id: 5, followed: false, ico: "https://i.pinimg.com/564x/8c/00/eb/8c00eb3d3d28e048df2ec7fb4f2cedcb.jpg", fullName: 'Pyro', status: 'strawberry on ship', location: {city: 'Saint-Petersburg', country: 'Russia'}},
        {id: 6, followed: true, ico: "https://i.pinimg.com/736x/2a/b2/98/2ab298634bdfc5b3ab941f63e947d800.jpg", fullName: 'Sergey', status: 'i`m sergey, it all', location: {city: 'Kurgan', country: 'Russia'}},
    ]
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
