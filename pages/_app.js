import Head from "next/head";
import "../styles/globals.css";

function MyApp() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Frontend Mentor | Tip calculator app</title>
      </Head>
      <main>
        Bill Select Tip % 5% 10% 15% 25% 50% Custom Number of People Tip Amount
        / person Total / person Reset
      </main>
      <footer className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </div>
  );
}

export default MyApp;
