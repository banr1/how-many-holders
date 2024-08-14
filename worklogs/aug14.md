# Aug 14, 2024

```log
~/workspace/how-many-holders/apps/web $ npx prisma init

✔ Your Prisma schema was created at prisma/schema.prisma
  You can now open it in your favorite editor.

warn You already have a .gitignore file. Don't forget to add `.env` in it to not commit any private information.

Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm

More information in our documentation:
https://pris.ly/d/getting-started
```

The result of asking Perplexity how to introduce monorepo into a project.
https://www.perplexity.ai/search/yi-xia-noyounanext-jsnohurosie-RNtcdd5zR2C4tSTA3QihXg

The result of asking Perplexity how to introduce Prisma into a project.
https://www.perplexity.ai/search/in-this-project-i-wanna-introd-xGW8VEQsQcyjm1NExqfiag

It's useful for monorepo with Supabase.
- https://github.com/psteinroe/supasample
- https://philipp.steinroetter.com/posts/supabase-turborepo

```log
~/workspace/how-many-holders $ supabase init
Generate VS Code settings for Deno? [y/N] 
Generate IntelliJ Settings for Deno? [y/N] 
Finished supabase init.
```

```log
~/workspace/how-many-holders $ supabase start
15.1.1.78: Pulling from supabase/postgres
f02209be4ee5: Pull complete 
3494031d77c2: Pull complete 
3b5b97d7bd46: Pull complete 
ec0f2ff53492: Pull complete 
b397c2c4772e: Pull complete 
c5d8bbf2cd93: Pull complete 
d2b2d602d86b: Pull complete 
cc58ea30b2af: Pull complete 
f04b9873e3cd: Pull complete 
a1de0c95bc92: Pull complete 
f35e6108c0b4: Pull complete 
82c4d509f5cb: Pull complete 
37e742aa8324: Pull complete 
a0bf7e811910: Pull complete 
23711d855607: Pull complete 
e275654979f9: Pull complete 
87898fbb53b0: Pull complete 
3b8ff667b8f2: Pull complete 
8d3eef7bbd54: Pull complete 
2ae2b55e3df3: Pull complete 
dbc3bf2a055f: Pull complete 
229f81ddc5f8: Pull complete 
310f9a4f778a: Pull complete 
4c27d0895f70: Pull complete 
Digest: sha256:881ac26a02870c6784d9fbec67a6a9c5026905216bbd7dfbfa289ecc48073387
Status: Downloaded newer image for public.ecr.aws/supabase/postgres:15.1.1.78
v2.30.23: Pulling from supabase/realtime
24c63b8dcb66: Already exists 
6764799352c1: Pull complete 
028e30586c45: Pull complete 
d6af6d52e02f: Pull complete 
7ed522a0de3f: Pull complete 
4cc7b722215e: Pull complete 
9bfbd16489b0: Pull complete 
e0f401b12ea9: Pull complete 
Digest: sha256:9f67337022a57a93aad67c59c3b062acf030d584f2977351fd3b715082cfc546
Status: Downloaded newer image for public.ecr.aws/supabase/realtime:v2.30.23
v1.0.6: Pulling from supabase/storage-api
bca4290a9639: Already exists 
f6ea11ef7b8a: Pull complete 
bb0a20d2be3e: Pull complete 
f2bdc5390932: Pull complete 
c6819247e48a: Pull complete 
56e22c5e4f1f: Pull complete 
2ae0ad1b1f7c: Pull complete 
b65e2d5afbfd: Pull complete 
82e222b829a7: Pull complete 
8496920075fc: Pull complete 
Digest: sha256:35f51a9dccdabf3ac821a136df030218906d97e629daebea00f500d2ba55f5e0
Status: Downloaded newer image for public.ecr.aws/supabase/storage-api:v1.0.6
v2.157.1: Pulling from supabase/gotrue
690e87867337: Pull complete 
f65945c61f3a: Pull complete 
f04c69931b44: Pull complete 
9da78343dfb3: Pull complete 
67a02bfa23a4: Pull complete 
7c8191fa306c: Pull complete 
Digest: sha256:74433b9665261fd2128b49431660723b3bb16e09d870972ec3dd430e3a063853
Status: Downloaded newer image for public.ecr.aws/supabase/gotrue:v2.157.1
Seeding globals from roles.sql...
Seeding data from seed.sql...
1.4.0: Pulling from supabase/logflare
261da4162673: Pull complete 
7d2a960092ca: Pull complete 
cab6fd4eb5d1: Pull complete 
05267fd6f742: Pull complete 
1e3eeb829493: Pull complete 
4cc5b43cfbf9: Pull complete 
455249722616: Pull complete 
4f4fb700ef54: Pull complete 
105209f6e8d8: Pull complete 
Digest: sha256:e693c787ffe1ae17b6e4e920a3cdd212416d3e1f97e1bd7cb5b67de0abbb0264
Status: Downloaded newer image for public.ecr.aws/supabase/logflare:1.4.0
WARNING: analytics requires mounting default docker socket: /var/run/docker.sock
0.28.1-alpine: Pulling from supabase/vector
6f0e733d82e2: Pull complete 
6bb05e259e43: Pull complete 
5b4d8c7e225f: Pull complete 
885405f2b3ce: Pull complete 
441655651244: Pull complete 
4f4fb700ef54: Pull complete 
Digest: sha256:4bc04aca94a44f04b427a490f346e7397ef7ce61fe589d718f744f7d92cb5c80
Status: Downloaded newer image for public.ecr.aws/supabase/vector:0.28.1-alpine
2.8.1: Pulling from supabase/kong
9b18e9b68314: Pull complete 
7fd91e922960: Pull complete 
450997ae687c: Pull complete 
d8380bfcbd9b: Pull complete 
Digest: sha256:1b53405d8680a09d6f44494b7990bf7da2ea43f84a258c59717d4539abf09f6d
Status: Downloaded newer image for public.ecr.aws/supabase/kong:2.8.1
3.0.3: Pulling from supabase/inbucket
failed to display json stream: toomanyrequests: Rate exceeded
Retrying after 4s: public.ecr.aws/supabase/inbucket:3.0.3
3.0.3: Pulling from supabase/inbucket
f97344484467: Pull complete 
c93cd632d565: Pull complete 
7cadd1efbbe6: Pull complete 
9853c0941218: Pull complete 
b6f6817b1d4a: Pull complete 
c5c956c4e9fc: Pull complete 
59cbfb43403a: Pull complete 
9c842edb6049: Pull complete 
Digest: sha256:dc912ab76de647ca2a363fe285515e512e964cf699166773f3c2c73f5e7f71c0
Status: Downloaded newer image for public.ecr.aws/supabase/inbucket:3.0.3
v12.2.0: Pulling from supabase/postgrest
9502885e1cbc: Pull complete 
247abff69f09: Pull complete 
9866e309203b: Pull complete 
Digest: sha256:2cf1efd2c9c2e7606610c113cc73e936d8ce9ba089271cb9cbf11aa564bc30c7
Status: Downloaded newer image for public.ecr.aws/supabase/postgrest:v12.2.0
v3.8.0: Pulling from supabase/imgproxy
df8e44b0463f: Pull complete 
b0f1dd53d7c3: Pull complete 
ead8ac122bf1: Pull complete 
4667765ff03a: Pull complete 
744485a3a3a9: Pull complete 
8650da0c91b5: Pull complete 
Digest: sha256:0facd355d50f3be665ebe674486f2b2e9cdaebd3f74404acd9b7fece2f661435
Status: Downloaded newer image for public.ecr.aws/supabase/imgproxy:v3.8.0
v1.56.0: Pulling from supabase/edge-runtime
262a5f25eec7: Pull complete 
c798c9b0720e: Pull complete 
5202cae3459b: Pull complete 
b2bf96c81077: Pull complete 
4111307fe46b: Pull complete 
dc5df47570c5: Pull complete 
Digest: sha256:503e84ca55c1065885cf232c11e51fb337057793d5914f75235145ef44d29084
Status: Downloaded newer image for public.ecr.aws/supabase/edge-runtime:v1.56.0
v0.83.2: Pulling from supabase/postgres-meta
failed to display json stream: toomanyrequests: Rate exceeded
Retrying after 4s: public.ecr.aws/supabase/postgres-meta:v0.83.2
v0.83.2: Pulling from supabase/postgres-meta
ea235d1ccf77: Pull complete 
503fd1813439: Pull complete 
621c4d35909d: Pull complete 
f7ff4bfea484: Pull complete 
f40fe1d4b8f2: Pull complete 
c59d5ba83276: Pull complete 
c645bc758eb6: Pull complete 
881851a298b1: Pull complete 
1a22b8d57024: Pull complete 
1d534c9441b5: Pull complete 
Digest: sha256:0e8cf91a277aefb7f85e4ec01c3b0ae69882b351c7927e3e21ce59c151ae780c
Status: Downloaded newer image for public.ecr.aws/supabase/postgres-meta:v0.83.2
20240729-ce42139: Pulling from supabase/studio
262a5f25eec7: Already exists 
d4c8f56dc421: Pull complete 
51bb16250737: Pull complete 
a7595a0d0e73: Pull complete 
6260db292a44: Pull complete 
6c26fff3d1d1: Pull complete 
93ec9ce1f186: Pull complete 
7c49c93e8a18: Pull complete 
58d74ee1e4e6: Pull complete 
9977039d961a: Pull complete 
Digest: sha256:374da591f7190427447b9865f63061f561ebc81306d7655d14dab7cb453f3907
Status: Downloaded newer image for public.ecr.aws/supabase/studio:20240729-ce42139
Started supabase local development setup.

         API URL: http://127.0.0.1:54321
     GraphQL URL: http://127.0.0.1:54321/graphql/v1
  S3 Storage URL: http://127.0.0.1:54321/storage/v1/s3
          DB URL: postgresql://postgres:postgres@127.0.0.1:54322/postgres
      Studio URL: http://127.0.0.1:54323
    Inbucket URL: http://127.0.0.1:54324
      JWT secret: super-secret-jwt-token-with-at-least-32-characters-long
        anon key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0
service_role key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImV4cCI6MTk4MzgxMjk5Nn0.EGIM96RAZx35lJzdJsyH-qQwv8Hdp7fsn3W0YpN81IU
   S3 Access Key: 625729a08b95bf1b7ff351a663f3a23c
   S3 Secret Key: 850181e4652dd023b7a98c58ae0d2d34bd487ee0cc3254aed6eda37307425907
       S3 Region: local
```
