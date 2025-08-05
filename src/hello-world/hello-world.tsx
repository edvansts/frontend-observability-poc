import { Link } from "react-router-dom";

export default function HelloWorld() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a simple React component.</p>
      <p>Welcome to the Grafana Faro POC!</p>
      <p>Enjoy exploring the observability features!</p>
      <p>Feel free to modify and enhance this component.</p>

      <Link to="/">
        <button>Go back</button>
      </Link>

      <p>Check out the Grafana Faro documentation for more information.</p>
      <p>
        Grafana Faro is designed to help you build observability into your
        applications.
      </p>
      <p>Explore the Grafana ecosystem for more tools and integrations.</p>
      <p>Happy coding!</p>
      <p>Remember to check the console for any logs or errors.</p>
    </div>
  );
}
