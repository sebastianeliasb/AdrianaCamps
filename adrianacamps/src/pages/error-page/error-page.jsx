import { useRouteError } from "react-router-dom";
import NameLayout from "../../layouts/nameLayout/NameLayout";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <NameLayout>
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </NameLayout>
  );
}