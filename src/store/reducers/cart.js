const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_ITEMS': return state;
    case 'ADD_ITEM':
      return [
        ...state,
        {
          name: action.payload,
          qty: 1,
        },
      ];
    case 'INCREMENT_ITEM':
      const item = state.find((b) => action.payload.name === b.name);
      const items = state.filter((b) => action.payload.name !== b.name);
      return [
        ...items,
        {
          ...item,
          qty: item.qty + 1,
        },
      ];
    case 'DECREMENT_ITEM':
      const item2 = state.find((b) => action.payload.name === b.name);
      const items2 = state.filter((b) => action.payload.name !== b.name);
      return [
        ...items2,
        {
          ...item2,
          qty: item2.qty - 1,
        },
      ];
    case 'REMOVE_ITEM':
      const itemsLeft = state.filter((b) => action.payload.name !== b.name);
      return [...itemsLeft];
    default:
      return state;
  }
};

export default cartReducer;
