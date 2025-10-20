import { defineEventHandler, getRouterParam } from "h3";

export default defineEventHandler(async (event) => {
  const postId = getRouterParam(event, "post-id");
  return await $fetch(`https://oauth.reddit.com/comments/${postId}`, {
    headers: {
      Authorization: `Bearer ${event.context.accessToken}`,
    },
  });
});
