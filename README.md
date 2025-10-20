# 🤓 Unreddit

> Unlimited access to Reddit API

## Why Unreddit?

Unlike it's sister projects [UNTTV](https://github.com/doceazedo/unttv) & [UNSC](https://github.com/doceazedo/unsc), Unreddit exists purely because Reddit blocks API requests from Vercel. So, I built this as a simple proxy for my personal website to fetch Reddit data through it.

## How it works?

Unreddit acts as a lightweight proxy between your app and Reddit's API. It simply forwards your requests and returns the responses, using my own secrets.

By default, results are cached for 24 hours.

## Who's using it?

Me at [doce.sh](https://doce.sh/blog/twin-stick-animations#comments).

## API

Endpoints are implemented as needed, and they don't necessarily match to Reddit's API.

### `/comments/[post-id]`

Get the comment tree for a given post.

See [GET \[/r/subreddit\]/comments/article](https://www.reddit.com/dev/api/#GET_comments_{article}).

## License

The Unreddit project is licensed under the [GPLv3 License](LICENSE).
