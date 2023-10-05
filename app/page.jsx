import { Suspense } from "react";
import PostList from "./posts/PostList";


export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      {/* <Suspense fallback={<p>Loading... users</p>}>
        <UsersList />
      </Suspense> */}
      <Suspense fallback={<p>Loading... posts</p>}>
        <PostList />
      </Suspense>
    </main>
  );
}
