# Registration & Login api in Deno


#### Sample Login, Registration api with [Deno](https://deno.land) and [oak framework](https://deno.land/x/oak)

## Features

 - Written in Typescript
 - Login page
 - Registration page
 - Protected routes available for authorized users only
 - Password encrypted using [bcrypt](https://deno.land/x/bcrypt)
 - Using [JWT](https://deno.land/x/djwt) tokens
 - [dotenv](https://deno.land/x/dotenv) implementation

## Installation

You need to have [Deno installed](https://deno.land/#installation) in order to run this app locally

1. Clone the project
1. Copy `.env.example` into `.env` and set `JWT_KEY` to some random unique key
1. Navigate to the project root directory using terminal
1. And run `deno run --allow-net --allow-read --allow-env server.ts`

