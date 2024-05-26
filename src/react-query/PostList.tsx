import React, { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  const [userId, setUserId] = useState<number>();
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts(userId, { pageSize });

  // if (isLoading) return <p>Loading...</p>;
  // if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        value={userId}
        name="user"
        title="user"
        className="form-control mb-3"
      >
        <option value=""></option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select>
      <ul className="list-group">
        {data.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li className="list-group-item" key={post.id}>
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
