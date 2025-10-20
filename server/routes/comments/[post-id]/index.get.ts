export default defineCachedEventHandler(
  async (event) => {
    const postId = getRouterParam(event, "post-id");
    return await $fetch(`https://oauth.reddit.com/comments/${postId}`, {
      headers: {
        Authorization: `Bearer ${event.context.accessToken}`,
      },
    });
  },
  { maxAge: 60 * 60 * 24 /* 24h */ }
);
