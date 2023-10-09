# NextJs The React Framework for the Web

**What is NextJs ?**

Next.js is a full-stack framework built on top of React. It facilitates building server-rendered and static web applications. With Next.js, you can create server-side routes and API endpoints, handle server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR). This framework streamlines the development process, ensuring optimal performance, SEO, and user experience. The recent enhancements in Next.js, like the App Router update, align with modern React features, making it a robust choice for full-stack development.


# Exploring Rendering Methods in Next.js

---

## Server-Side Rendering (SSR)
- **Introduction**: 
  - Generates HTML on the server per request.
  - Sends a fully rendered page to the client.
- **Advantages**:
  - Ideal for SEO-critical pages.
  - Great for dynamic content.
- **Scenario**:
  - A news website with constantly updating content.

---

## Static Site Generation (SSG)
- **Introduction**:
  - Generates HTML at build time.
  - Reuses generated pages for each request.
- **Advantages**:
  - Fast load times.
  - Suited for static content.
- **Scenario**:
  - A blog or documentation site.

---

## Client-Side Rendering (CSR)
- **Introduction**:
  - Renders pages in the browser using JavaScript.
  - Initial load fetches a bare HTML file, then JS renders the content.
- **Advantages**:
  - Interactive UIs.
  - Less server load.
- **Scenario**:
  - A dynamic and interactive application like a dashboard.

---

## Incremental Static Regeneration (ISR)
- **Introduction**:
  - Updates static pages incrementally after build.
  - Combines benefits of SSR and SSG.
- **Advantages**:
  - Fresh content with optimized performance.
  - Best of both SSR and SSG worlds.
- **Scenario**:
  - An e-commerce site with frequently changing product details.


---

## Building Full Stack Applications with Next.js

- **Introduction**:
  - Create both front-end and back-end in a single project.
  - Server-side routes and API endpoints for back-end logic.
- **Advantages**:
  - Unified development experience.
  - Streamlined deployment.
- **Scenario**:
  - Building a full-fledged e-commerce site with user authentication, product listings, and a checkout process, all managed within a single Next.js project.


# Installation

**System Requirements:**

***Node.js 16.14*** or later.
macOS, Windows (including WSL), and Linux are supported.


**Automatic Installation**

We recommend starting a new Next.js app using create-next-app, which sets up everything automatically for you. To create a project, run:

```bash
npx create-next-app@latest
```

On installation, you'll see the following prompts:

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*

```

### roadmap 

**File Structure**
Practical Example

**pages and routing**
Practical Example


**Client and Server Component**

Client-side rendering (CSR) and server-side rendering (SSR) are distinct methods of rendering web pages, each with its own advantages and disadvantages::

1. **Initial Load**: 
   - **CSR**: Delays in initial content rendering can frustrate users.
   - **SSR**: Immediate rendering is user-friendly, especially on slow networks.
   
2. **SEO**:
   - **CSR**: Search engine crawlers might struggle to index dynamic content.
   - **SSR**: Fully-rendered pages are easily indexed, boosting SEO.

3. **Security**:
   - **CSR**: More client-side code could expose vulnerabilities.
   - **SSR**: Limits client exposure, securing sensitive logic.

4. **Real-time Updates**:
   - **CSR**: Easier with frameworks like React for dynamic content updates.
   - **SSR**: Requires additional configurations for real-time updates.

Each scenario necessitates a trade-off, and your project's priorities will guide the rendering choice.


### Data Fetching

The release of NextJS 13 brought about a plethora of new and impressive features, with one standout being the updated data fetching and management process. The fetch API replaced the more complicated functions, including getServerSideProps, getStaticProps, and getInitialProps.

**fetch() API**
React recently introduces support for async/await in Server Components. You can now write Server Components using standard JavaScript await syntax by defining your component as an async function and that is what turned out to be a big plus point for NextJS 13.


```js
import React from 'react';

const page = async () => {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const postData = await posts.json();

    return (
        <div>

            <h1>Posts</h1>
            {postData.map(post => (
                <h1>{post.title}</h1>
            ))}
        </div>
    );
};
export default page;
```
note the fact that you no longer need to do this on the page level, like if you did before using getStaticProps or getServerSideProps. You can do this inside any component.

**Client Components**
For now, if you need to fetch data in a Client Component, NextJS 13 recommends using a third-party library such as SWR or React Query.

**Caching Data**
Caching stores data so it doesn't need to be re-fetched from your data source on every request.

By default, Next.js automatically caches the returned values of fetch in the Data Cache on the server. This means that the data can be fetched at build time or request time, cached, and reused on each data request.

```js
// 'force-cache' is the default, and can be omitted
fetch('https://...', { cache: 'force-cache' })

```

**Revalidating Data**
Revalidation is the process of purging the Data Cache and re-fetching the latest data. This is useful when your data changes and you want to ensure you show the latest information.

Cached data can be revalidated in two ways:

**Time-based revalidation:** Automatically revalidate data after a certain amount of time has passed. This is useful for data that changes infrequently and freshness is not as critical.
**On-demand revalidation:** Manually revalidate data based on an event (e.g. form submission). On-demand revalidation can use a tag-based or path-based approach to revalidate groups of data at once. This is useful when you want to ensure the latest data is shown as soon as possible (e.g. when content from your headless CMS is updated).

**Time-based Revalidation**
To revalidate data at a timed interval, you can use the next.revalidate option of fetch to set the cache lifetime of a resource (in seconds).

```js
fetch('https://...', { next: { revalidate: 3600 } })
```

Alternatively, to revalidate all fetch requests in a route segment, you can use the Segment Config Options.

```js
export const revalidate = 3600 // revalidate at most every hour
```


### options.cache

Configure how the request should interact with Next.js Data Cache.

```javascript
fetch(`https://...`, { cache: 'force-cache' | 'no-store' })
```

- `force-cache` (default) - Next.js looks for a matching request in its Data Cache...
- `no-store` - Next.js fetches the resource from the remote server...

### options.next.revalidate

Set the cache lifetime of a resource (in seconds).

```javascript
fetch(`https://...`, { next: { revalidate: false | 0 | number } })
```

- `false` - Cache the resource indefinitely...
- `0` - Prevent the resource from being cached...
- `number` - (in seconds) Specify the resource should have a cache lifetime...

### options.next.tags

Set the cache tags of a resource.

```javascript
fetch(`https://...`, { next: { tags: ['collection'] } })
```
Data can then be revalidated on-demand using revalidateTag...


**Static Data Fetching**
fetch by default caches the data. So, even if the data from the API changes, when you refresh the page, the site doesn't update the data. This works great for sites which have static data which seldom changes. The example above demonstrates how to do this because it is the same as doing

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "force-cache",
});

```

**Dynamic Data Fetching**
You can tell the fetch API to never cache the data by changing force-cache to no-cache or no-store(both signify the same in NextJS).

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  cache: "no-cache"
});
```

#Routing In NextJs 13

# Special File Names and Folder Naming Patterns in NextJs 13's app folder

## Reserved file names in the app folder
- `page.js`: Main entry point for each folder.
- `layout.js`: Contains the wrapping layout for pages.
- `template.js`: Similar to `layout.js` but remounts on navigation.
- `head.js`: Used to customize the page head.
- `error.js`: Used in data fetching to show intermediate states.
- `not-found.js`: Renders the error screen for a not found item.

## Special naming conventions for folders
- `[id]`: Query parameters for routing.
- `[...folder_name_here]`: Catch-all segments for varied URL mappings.
- `(folder_name_here)`: Named route groups for organizing routes without affecting the URL.

[Reference](https://www.js-craft.io/blog/next-13-special-files-and-folders-naming-conventions-in-the-app-folder/)

---

### Layouts

A layout is UI that is shared between multiple pages. On navigation, layouts preserve state, remain interactive, and do not re-render. Layouts can also be nested.

You can define a layout by default exporting a React component from a layout.js file. The component should accept a children prop that will be populated with a child layout (if it exists) or a child page during rendering.



```jsx
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

### Nesting Layouts

Layouts defined inside a folder (e.g. app/dashboard/layout.js) apply to specific route segments (e.g. acme.com/dashboard) and render when those segments are active. By default, layouts in the file hierarchy are nested, which means they wrap child layouts via their children prop.


```jsx
export default function DashboardLayout({
  children,
}) {
  return <section>{children}</section>
}
```

### Loading UI and Streaming

The special file loading.js helps you create meaningful Loading UI with React Suspense. With this convention, you can show an instant loading state from the server while the content of a route segment loads. The new content is automatically swapped in once rendering is complete.


### Instant Loading States

An instant loading state is fallback UI that is shown immediately upon navigation. You can pre-render loading indicators such as skeletons and spinners, or a small but meaningful part of future screens such as a cover photo, title, etc. This helps users understand the app is responding and provides a better user experience.

Create a loading state by adding a loading.js file inside a folder.
In the same folder, loading.js will be nested inside layout.js. It will automatically wrap the page.js file and any children below in a <Suspense> boundary.



### Streaming with Suspense
In addition to loading.js, you can also manually create Suspense Boundaries for your own UI components. The App Router supports streaming with Suspense for both Node.js and Edge runtimes.

What is Streaming?
To learn how Streaming works in React and Next.js, it's helpful to understand Server-Side Rendering (SSR) and its limitations.

With SSR, there's a series of steps that need to be completed before a user can see and interact with a page:

1. First, all data for a given page is fetched on the server.
2. The server then renders the HTML for the page.
3. The HTML, CSS, and JavaScript for the page are sent to the client.
4. A non-interactive user interface is shown using the generated HTML, and CSS.
5. Finally, React hydrates the user interface to make it interactive.

These steps are sequential and blocking, meaning the server can only render the HTML for a page once all the data has been fetched. And, on the client, React can only hydrate the UI once the code for all components in the page has been downloaded.

SSR with React and Next.js helps improve the perceived loading performance by showing a non-interactive page to the user as soon as possible.

However, it can still be slow as all data fetching on server needs to be completed before the page can be shown to the user.

Streaming allows you to break down the page's HTML into smaller chunks and progressively send those chunks from the server to the client.


This enables parts of the page to be displayed sooner, without waiting for all the data to load before any UI can be rendered.

Streaming works well with React's component model because each component can be considered a chunk. Components that have higher priority (e.g. product information) or that don't rely on data can be sent first (e.g. layout), and React can start hydration earlier. Components that have lower priority (e.g. reviews, related products) can be sent in the same server request after their data has been fetched.



Streaming is particularly beneficial when you want to prevent long data requests from blocking the page from rendering as it can reduce the Time To First Byte (TTFB) and First Contentful Paint (FCP). It also helps improve Time to Interactive (TTI), especially on slower devices.

### Example

<Suspense> works by wrapping a component that performs an asynchronous action (e.g. fetch data), showing fallback UI (e.g. skeleton, spinner) while it's happening, and then swapping in your component once the action completes.

```jsx 

import { Suspense } from 'react'
import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
        <Weather />
      </Suspense>
    </section>
  )
}
```

### not-found.js

The **not-found** file is used to render UI when the notFound function is thrown within a route segment. Along with serving a custom UI, Next.js will return a 200 HTTP status code for streamed responses, and 404 for non-streamed responses.

```jsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```


### Catch-all Segments in NextJs for E-Commerce URL Structure

In the context of an e-commerce platform, managing routes effectively becomes crucial to ensure a smooth user navigation experience. Utilizing NextJs's catch-all segments can be highly beneficial in crafting a flexible URL strategy to manage various product hierarchies and categories.

Consider an e-commerce platform with various products, each product belonging to a category and potentially a sub-category. A potential URL structure could be:

- `/products/[category]/[subCategory]/[productId]`

#### Implementing Catch-all Segments

Using catch-all segments, we can create a routing mechanism in NextJs that dynamically handles varying URL depths in an elegant and developer-friendly manner.

##### Folder Structure:

```plaintext
/app
    /products
        /[...params]
            page.js
```


#### Intercepting Multiple URL Parameters

The catch-all segments enable us to intercept multiple URL parameters, thus providing the flexibility to manage various URL structures:

```plaintext
/products/one
/products/one/two
/products/one/two/three
```

This allows you to create a user-friendly URL structure, such as:
- `/products/electronics`
- `/products/electronics/phones`
- `/products/electronics/phones/123`

#### Optional Catch-all Segments

Using the optional catch-all dynamic segments, we can handle even the root path, preventing 404 errors for URLs like `/products`:

```plaintext
/app
    /products
        /[[...params]]
            page.js
```

##### Example URLs:

```plaintext
/products
/products/electronics
/products/electronics/phones
/products/electronics/phones/123
```

### Conclusion

Implementing catch-all and optional catch-all segments in NextJs allows developers to create a rich, user-friendly, and SEO-optimized URL strategy, especially beneficial in scenarios like e-commerce platforms where a hierarchical and intuitive navigation system is key to enhancing user experience and SEO.


# Introducing the route groups in NextJs 13

In this Docs, we will see how to use the NextJs route groups to set a shared layout for multiple pages in the app folder.

Let's say we have the following files in the app folder:

```plaintext
/app
    page.js -> maps to: /
    /red
        page.js -> maps to: /red
    /blue
        page.js -> maps to: /blue
    /green
        page.js -> maps to: /green
```

For the `/red` and `/blue` routes we want to set a shared [layout], but we don't want to have this layout on the `/green` route.

In order to do this we will need to use the route groups from NextJs.

A route group is created by wrapping a folder’s name in parenthesis:

```plaintext
(nameOfFolder)
```

By adding a route group we are breaking out of the [NextJs route system]. The folders written in round brackets are not included in the application routes.

So, if we will add put the `red` and `blue` folders in a folder named `(sharedLayout)`, we will still have the same routes as before:

```plaintext
/app
    page.js -> maps to: /
    (sharedLayout)
        /red
            page.js -> maps to: /red
        /blue
            page.js -> maps to: /blue
    /green
        page.js -> maps to: /green
```

We can use the route groups to better organize our code.

# Adding shared layouts for multiple pages

But, one cool thing is that we can also use route groups to share layouts between multiple pages with the same root folder. So, if we will add a `layout.js` file in the `(sharedLayout)` folder:

```plaintext
/app
    page.js
    /(sharedLayout)
        layout.js
        /red
            page.js
        /blue
            page.js
    /green
        page.js -> maps to: /green
```

Then the `/red` and `/blue` pages will have the same shared layout file:

```plaintext
/app/(sharedLayout)/layout.js
```


### Route Handlers

Route Handlers allow you to create custom request handlers for a given route using the Web Request and Response APIs.


<div style="padding: 10px; border-left: 5px solid #f39c12; background-color: #fffbcc; margin-bottom: 15px;">
    <strong>Good to Know:</strong> Route Handlers are only available inside the app directory. They are the equivalent of API Routes inside the pages directory meaning you do not need to use API Routes and Route Handlers together.
</div>

**Convention**
Route Handlers are defined in a **route.js|ts** file inside the app directory:

```js
export async function GET(request) {}
```

**Supported HTTP Methods**

The following HTTP methods are supported:**GET, POST, PUT, PATCH, DELETE, HEAD**, and **OPTIONS**. If an unsupported method is called, Next.js will return a 405 Method Not Allowed response.

**Extended NextRequest and NextResponse APIs**
In addition to supporting native Request and Response. Next.js extends them with NextRequest and NextResponse to provide convenient helpers for advanced use cases.



### Introduction to Zod

[Zod](https://github.com/colinhacks/zod) is a JavaScript library that allows for building schemas to validate, parse, and statically type-check data. It's primarily used in TypeScript projects but can be used in JavaScript projects as well.

#### Why Use Zod?

1. **Type Safety:** Zod schemas are used to derive TypeScript types, ensuring type safety without having to duplicate type definitions.
   
2. **Validation:** It provides a powerful and easy way to validate data and extract the validated data in a type-safe manner.
   
3. **Parsing:** Zod helps in parsing data, ensuring that the data adheres to expected formats and types.

4. **Error Handling:** It provides detailed error messages when data fails validation, making it easier to identify and fix issues.

5. **Lightweight:** Zod is lightweight and has no dependencies, making it a good choice for projects that need to manage their bundle size.

6. **Extensibility:** It allows for creating custom validations using its extensible API.

### Example Usage of Zod

Let's go through a simple example of how Zod can be used to validate and parse data. First, ensure that Zod is installed in your project. If not, you can add it using npm or Yarn:

```sh
npm install zod
```
or
```sh
yarn add zod
```

Below is a TypeScript example demonstrating how you might use Zod to validate user data:

```javascript
import { z } from 'zod';

// Define a schema
// Define a Zod schema
const PostSchema = z.object({
    title: z.string(),
    // Add any additional properties and their validations here
});
export default PostSchema;

// Validate the data

export const POST = async (req) => {

    const body = await req.json();

    const result = PostSchema.safeParse(body);

    if (result.success) {
        // Your logic for handling valid data goes here
        // You can safely use result.data
        return NextResponse.json({ message: "Successful validation" });
    } else {
        // Your logic for handling validation errors goes here
        return NextResponse.json({
            message: "Validation failed",
            errors: result.error.errors,
        });
    }
};


```
The **safeParse** method returns an object with a success boolean property indicating whether the parsing was successful or not. If success is true, the validated data can be accessed via the data property. If success is false, the validation error can be accessed via the error property.



### Introducing Prisma

#### What is Prisma?

Prisma is a modern database access toolkit that simplifies database access and ensures type safety. It replaces traditional ORMs and simplifies database workflows.

#### Key Features

- **Prisma Client**: An auto-generated query builder that enables type-safe database access.
- **Prisma Migrate**: A declarative data modeling and migration system.
- **Prisma Studio**: A modern, intuitive database management UI.

### Getting Started with Prisma

#### Installation

Install Prisma CLI globally using npm or yarn.

```shell
npm install prisma -D
```

#### Initialization

Create a new Prisma project or integrate it into an existing project.

```shell
npx prisma init
```

#### Configuring the Database

Specify your database connection in `prisma/schema.prisma`.

```prisma
datasource db {
  provider = "postgresql" // default provider you can use mongodb, mysql or any other database
  url      = env("DATABASE_URL")
}
```

### Prisma Data Types

Prisma supports a variety of data types, here are a few:

- **String**: Text data.
- **Int**: Integer numbers.
- **Float**: Floating-point numbers.
- **Boolean**: True/False values.
- **DateTime**: Date and time values.
- **Json**: JSON objects.
- **Enum**: Enumerated values.

### Prisma Models

Models in Prisma represent the entities of your application domain and are defined in the Prisma schema. They map to tables in the database.


The provided code snippets illustrate the use of `ObjectId` in MongoDB. `ObjectId` is a 12-byte identifier typically employed to uniquely identify documents within a collection. MongoDB automatically generates an `_id` field of type `ObjectId` if a new document doesn't have one. 

### Explanation of the Code

#### Using ObjectId
It is common practice for the _id field of a MongoDB document to contain an **ObjectId**:

```json
{
  "_id": {"$oid": "60d599cb001ef98000f2cad2"},
  "createdAt": {"$date": {"$numberLong": "1624611275577"}},
  "email": "ella@prisma.io",
  "name": "Ella",
  "role": "ADMIN"
}
```
This JSON-like code represents a MongoDB document, which includes:
- An `_id` field with an `ObjectId` as a unique identifier for the document.
- A `createdAt` field with a date as a numeric string. 
- `email`, `name`, and `role` fields as additional data fields.

#### 2. Prisma Model with String Type ID
```prisma
model User {
  id       String @id @default(auto()) @map("_id") @db.ObjectId
  // Other fields
}
```
This Prisma model represents a `User`:
- The `id` field is of type `String`, mapped to an `_id` in MongoDB, and it uses an `ObjectId` type in the database. 
- `@default(auto())` ensures that a new `ObjectId` is auto-generated for new documents.

#### 3. Prisma Model with Bytes Type ID
```prisma
model User {
  id       Bytes @id @default(auto()) @map("_id") @db.ObjectId
  // Other fields
}
```
Similar to the model above, this `User` model uses a `Bytes` type for the `id`, which will also map to MongoDB's `ObjectId`.

### Notes:
- `ObjectId`: This is a unique identifier used to locate documents within a collection. The `ObjectId` is like a primary key as it's unique across the collection.
- `@default(auto())`: This Prisma attribute is used to auto-generate `ObjectId` upon the creation of a new document.
- `@map("_id")`: Maps the `id` field in your Prisma model to the `_id` field in MongoDB.
- `@db.ObjectId`: Indicates that the field uses MongoDB's `ObjectId` type.

### Important Points:
1. **Use of `ObjectId`**: It's commonly used in the `_id` field but can also be used in other fields like relation scalars.
2. **Type of `ObjectId`**: It must be either `String` or `Bytes` in the Prisma model.
3. **Auto-generation**: By using `@default(auto())`, a new `ObjectId` is automatically generated when a new document is created.
   
### Usage in Prisma:
You define your Prisma models to interact with MongoDB collections and documents. The defined models must adhere to the structure of the documents in the MongoDB collection for proper interaction. 

### Summary:
- **In MongoDB**: Each document typically has an `_id` field with an `ObjectId` to uniquely identify it.
- **In Prisma**: Models that interact with MongoDB often map a field to the `_id` of a MongoDB document and utilize `ObjectId` for unique identification. Different attributes and type definitions ensure compatibility and functionality.


#### Example: Defining a Simple Model

```prisma
model User {
   id String @id @default(auto()) @map("_id") @db.ObjectId
  name  String
  email String  @unique
  posts Post[]
}
```

Here, `User` is a model with fields `id`, `name`, and `email`. The `posts` field represents a relation to another model, `Post`.

### Creating and Using Models

#### Example: Extending the User Model

Let's extend our `User` model by adding a new model, `Post`.

```prisma
model Post {
  id String @id @default(auto()) @map("_id") @db.ObjectId
  title     String
  content   String?
  author    User     @relation(fields: [authorId], references: [id])
  authorId  ObjectId
}
```

#### Generating Prisma Client

Generate Prisma Client based on your data model.

```shell
npx prisma generate
```


`npx prisma db push` and `npx prisma generate` are commands provided by Prisma, but they serve different purposes:

### 1. `npx prisma db push`

- **Purpose**: To update the database schema to match the Prisma schema.
- **Use-case**: Often used in development to quickly iterate over schema changes without having to handle migrations. It is not recommended for use in production.
- **Behavior**: 
  - It updates the database schema to match the Prisma schema, **without** creating migrations.
  - It can result in data loss if changes are not backward compatible (such as changing a column type or deleting a column).
- **Command**:
  ```sh
  npx prisma db push
  ```
- **Key Considerations**: 
  - It does not handle database migrations or the migration history.
  - It’s a way to prototype quickly, but for a more controlled and incremental schema update, migrations are preferred.

### 2. `npx prisma generate`

- **Purpose**: To generate Prisma Client based on your Prisma schema.
- **Use-case**: Used after defining or updating the Prisma schema to ensure that Prisma Client is up to date and can be used in your application code.
- **Behavior**: 
  - Generates Prisma Client in `node_modules/@prisma/client`.
  - Does not affect the database schema.
- **Command**:
  ```sh
  npx prisma generate
  ```
- **Key Considerations**: 
  - Should be run after every change to the Prisma schema to ensure that the Prisma Client API is updated.
  - If using Prisma Migrate, it is generally run after migration commands to ensure the client is in sync with the schema.

### In a Typical Development Workflow:

- You define or modify your Prisma schema.
- If using migrations: 
  - You create a migration using `npx prisma migrate dev --name <migration-name>`.
  - The above command also runs `prisma generate` automatically unless configured otherwise.
- If not using migrations and prototyping:
  - You push changes to the database using `npx prisma db push`.
  - You run `npx prisma generate` to update the Prisma Client.
  
### Summary:

- `npx prisma db push`: Quick-and-dirty way to update the database schema for prototyping.
- `npx prisma generate`: Generates/updates Prisma Client to match the Prisma schema and should be run after every schema change.

Both commands are part of a typical Prisma workflow, but they handle different aspects of it. Always use them as per your requirement in the development or production workflow.





#### Using Prisma Client to Access the Database


# Best Practice for Instantiating `PrismaClient` with Next.js

## Problem

Many users have encountered the following warning while working with Next.js in development:

> warn(prisma-client) There are already 10 instances of Prisma Client actively running.

Related discussions and issues are available on this topic.

In development mode, executing `next dev` clears the Node.js cache upon each run. Consequently, due to hot reloading, a new `PrismaClient` instance is initialized each time, establishing a connection to the database. Rapid instantiation of `PrismaClient` can swiftly exhaust the database connections because each instance maintains its own connection pool.

## Solution

The optimal solution is to instantiate a single instance of `PrismaClient` and store it on the `globalThis` object. A check should then be implemented to only instantiate `PrismaClient` if it's not already present on the `globalThis` object. If it is present, the existing instance should be reused to prevent the instantiation of additional `PrismaClient` instances.

### Example Code

```javascript
import { PrismaClient } from '@prisma/client'

let prisma

// check if PrismaClient is not on `globalThis` object
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient()
  }
  prisma = globalThis.prisma
}

export default prisma

```


### Conclusion

Prisma provides a streamlined, type-safe way to interact with your database, manage your data model, and carry out database migrations. Its ease of use, powerful features, and scalability make it an excellent choice for modern application development. Further exploration can be done via [Prisma's documentation](https://www.prisma.io/docs/).


### Auto-completion using plain JavaScript

Auto-completion is one of the powerful features provided by Prisma when using TypeScript. However, if you are using plain JavaScript, you might lose some of these capabilities. Nonetheless, you can still enable auto-completion in JavaScript by type-checking your JavaScript files using JSDoc and TypeScript as a background service.

Here's how you might achieve that:

### 1. Install TypeScript (as a devDependency)

Even though you're using JavaScript, installing TypeScript in your project can help VSCode and other editors provide better autocompletion and type checking.

```sh
npm install --save-dev typescript
```

### 2. Configure TypeScript for JSDoc

Create a `tsconfig.json` file in your project root (if you don't have one already) with the following contents:

```json
{
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "noEmit": true,
    "strict": false,
    "target": "es6",
    "moduleResolution": "node",
    "baseUrl": "."
  },
  "include": [
    "next.config.js",
    "**/*.js"
  ]
}
```

- `"checkJs": true` enables type-checking for JavaScript files.
- `"noEmit": true` ensures TypeScript is used only for type-checking and doesn't compile code.

### 3. Use JSDoc for Type Annotations

Use JSDoc comments to annotate types in your JavaScript files. For Prisma, you'll mainly want to type the Prisma client. Here’s an example:

```javascript
/** @type {import('@prisma/client').PrismaClient} */
const prisma = require('@prisma/client');
```

Or if you are using ES6 imports:

```javascript
import prisma from '@prisma/client';

/** @type {import('@prisma/client').PrismaClient} */
const prismaClient = prisma;
```

### 4. Enable Type Checking and Autocompletion in VSCode

If you're using VSCode, it will automatically pick up the `tsconfig.json` and provide autocompletion and type-checking. If you are using a different editor, you may need to check the specific settings or plugins needed to utilize TypeScript for type checking in JavaScript.

### Notes:

- If you find the type checking too strict or it’s providing unwanted noise, you can adjust the `"strict": false` setting in the `tsconfig.json` file.
- If you've specific files or directories you don't want TypeScript to check, you can adjust or add them to the `"exclude"` array in `tsconfig.json`.


npx prisma generate && next build

export const dynamic = 'auto';

NEXT_PUBLIC_SITE_URL=http://localhost:3000


### NextAuth authentication

1. setup google auth
2. setup .env file
3. setup next-auth route 
4. wrap the authProvider with our entire app 
5. add login to our navbar 
6. access user data on the client 
7. access user data on the server
8. logout user
9. customize login and logout actions
10. primsa adapters mongodb
11. prisma studio demo


prisma adapter mongodb docs
https://authjs.dev/reference/adapter/prisma


to generate nextauth secret you can use openssl

```bash
openssl rand -base64 32 
```


### next auth schema 

```prisma 

// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mongodb"
  url      = env("DATABASE_URL")
}

model Account {
  id                String  @id @default(auto()) @map("_id") @db.ObjectId
  userId            String  @db.ObjectId
  type              String
  provider          String
  providerAccountId String
  refresh_token     String? @db.String
  access_token      String? @db.String
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String? @db.String
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(auto()) @map("_id") @db.ObjectId
  sessionToken String   @unique
  userId       String   @db.ObjectId
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(auto()) @map("_id") @db.ObjectId
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
  Post          Post[]
}

model VerificationToken {
  id         String   @id @default(auto()) @map("_id") @db.ObjectId
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model Post {
  id      String  @id @default(auto()) @map("_id") @db.ObjectId
  title   String
  user_id String? @db.ObjectId
  content String
  url     String
  User    User?   @relation(fields: [user_id], references: [id])
}
```