import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  const data = await $fetch<{ access_token?: string }>(
    `https://www.reddit.com/api/v1/access_token?grant_type=password&username=${process.env.REDDIT_USERNAME}&password=${process.env.REDDIT_PASSWORD}`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(
          process.env.REDDIT_CLIENT_ID + ":" + process.env.REDDIT_CLIENT_SECRET
        ).toString("base64")}`,
      },
    }
  );
  event.context.accessToken = data.access_token || null;
});
