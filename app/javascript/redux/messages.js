const url = '/api/v1/messages';
const GET_MESSAGE = 'GET_MESSAGE';
const initialState = {};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.message;
    default:
      return state;
  }
};

export default messagesReducer;

export const getMessage = () => async (dispatch) => {
  const response = await fetch(url, { mode: 'cors', method: 'GET',
  headers: {
    accept: 'application/json'}
  },);
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }
  const json = await response.json();
  const result = json.messages;
  const messages = result.map((data) => ({
    id: data.episode_id,
    text: data.text,
  }));
  const max = messages.length
  const index = Math.floor(Math.random() * max)
  const message = messages[index]
  dispatch({
    type: GET_MESSAGE,
    message,
  });
};