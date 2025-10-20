export default defineCachedEventHandler(
  async (event) => {
    const username = getRouterParam(event, "username");
    return await $fetch(`https://api.reddit.com/user/${username}/about`);
  },
  { maxAge: 60 * 60 * 24 /* 24h */ }
);
