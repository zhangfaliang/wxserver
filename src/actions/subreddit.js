// import fetch from "cross_fetch";

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const INVALODATE_SUBREDDIT = "INVALODATE_SUBREDDIT";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const selectSubreddit = subreddit => {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
};

export const invalidatesubreddit = subreddit => {
  return {
    type: INVALODATE_SUBREDDIT,
    subreddit
  };
};

export const requestPosts = subreddit => ({ type: REQUEST_POSTS, subreddit });

export const receivePosts = (subreddit, json) => {
  debugger
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
};

export function fetchPosts(subreddit) {
  // thunk middleware 知道如何处理函数
  // 这里把 dispatch 方法通过产生的形式传递给函数
  // 以此来让它自己也能 dispatch action

  return function(dispatch) {
    dispatch(requestPosts(subreddit));
    return new Promise((reject,resolve) => { 
      setTimeout(() => {
        reject(2, {})
        dispatch(receivePosts(subreddit, {
          data: {
            children: [
              {
                data: {}
              }
            ]
        }}))
      }, 2000);
    })
  //   return fetch(`http://www.subreddit.com/r/${'frontend'}.json`)
  //   .then(
  //     response => response.json(),
  //     // 不要使用 catch，因为会捕获
  //     // 在 dispatch 和渲染中出现的任何错误，
  //     // 导致 'Unexpected batch number' 错误。
  //     // https://github.com/facebook/react/issues/6895
  //      error => console.log('An error occurred.', error)
  //   )
  //   .then(json =>
  //     // 可以多次 dispatch！
  //     // 这里，使用 API 请求结果来更新应用的 state。
  //     dispatch(receivePosts(subreddit, json))
  //   )
    // 
  };
}
