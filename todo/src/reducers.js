export const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }
  ];

  export const reducer = (state, action) => {
    switch(action.type) {
      case "add":
          if(action.payload){
            return [
            ...state, 
            {
                item: action.payload, 
                completed: false,
                id: new Date()
            }
            ]
            }  
            break; 
      case "toggle":
        return state.map(task => {
          if (task.id === action.payload) {
            return {
              ...task, 
              completed: !task.completed
            }
          }
          return task
        });

      case "clear":
        return state.filter(task => !task.completed);

      default:
        return state
    }
  };