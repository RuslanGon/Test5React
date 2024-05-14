

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Page you visited is not page! sorry</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
