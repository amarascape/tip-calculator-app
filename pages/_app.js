import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form.js";
import "../styles/globals.css";

function MyApp() {
  return (
    <div className="myApp">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon-32x32.png" />
        <title>Frontend Mentor | Tip calculator app</title>
        {/* Bootstrap CSS */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
          integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
          crossOrigin="anonymous"
        />
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <img id="SPLITTER-LOGO" src="/logo.svg" alt="" />
        <Form />
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
        . Coded by <a href="#">amarascape</a>.
      </footer>
    </div>
  );
}

export default MyApp;
