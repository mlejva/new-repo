the app is: Blog

the files we have decided to generate are: pages/index.js, pages/posts/[slug].js, components/PostList.js, components/Post.js, lib/posts.js, styles/index.css, public/favicon.ico

Shared dependencies:
1. Exported variables:
   - posts (from lib/posts.js)
   - post (from lib/posts.js)

2. Data schemas:
   - Post metadata (title, date, slug, coverImage, excerpt)

3. ID names of DOM elements:
   - post-list (in components/PostList.js)
   - post-item-{slug} (in components/Post.js)
   - post-title-{slug} (in components/Post.js)
   - post-date-{slug} (in components/Post.js)
   - post-excerpt-{slug} (in components/Post.js)

4. Message names:
   - None

5. Function names:
   - getSortedPostsData (from lib/posts.js)
   - getPostBySlug (from lib/posts.js)
   - getAllPostSlugs (from lib/posts.js)