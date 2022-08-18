const initState = {
  posts: [
    {id: '1', title: 'Khorkuto', body: 'Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun Sounjanya Gungun'},
    {id: '2', title: 'Meghe Dhaka Tara', body: 'Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda Ankur Brinda'},
    {id: '3', title: 'Mou Er Bari', body: 'Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou Rupam Mou'}
  ]
}

const rootReducer = (state = initState, action) => {
  console.log(action);

  if(action.type === 'DELETE_POST') {
    let newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
}

export default rootReducer;