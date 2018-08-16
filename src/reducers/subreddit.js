import { combineReducers } from "redux";
import {
  SELECT_SUBREDDIT,
  INVALODATE_SUBREDDIT,
  REQUEST_POSTS,
  RECEIVE_POSTS,
} from "../actions/subreddit";

const initialzeStore = {
  selectSubreddit: "frontend",
  entities: {
    users: {
      2: {
        id: 2,
        name: "Andrew"
      }
    },
    posts: {
      42: {
        id: 42,
        title: "confusion about Flux and Relay",
        author: 2
      },
      100: {
        id: 100,
        title:
          "creating a  simple application using react js  and  flux architecture",
        author: 2
      }
    }
  },
  postsBySubreddit: {
    frontend: {
      isFetching: true,
      didInvalidate: false,
      items: []
    },
    reactjs: {
      isFetching: false,
      didInvalidate: false,
      lastUpdated: 1213123,
      items: [42, 100]
    }
  }
};

function selectSubreddit(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALODATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        isFetching: true,
        didInvalidate: false
      };
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALODATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectSubreddit
});

export default rootReducer;
