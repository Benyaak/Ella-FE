export const createAction = (name, stage) => `backend/${name}/${stage}`;
export const createActionTriplet = name => ({
  pending: createAction(name, 'pending'),
  success: createAction(name, 'success'),
  failure: createAction(name, 'failure'),
});
export const createFetchActions = name => ({
  FETCH: createAction(name, 'FETCH'),
  SUCCESS: createAction(name, 'SUCCESS'),
  FAILURE: createAction(name, 'FAILURE'),
});

export default {
  createAction,
  createActionTriplet,
  createFetchActions,
};
