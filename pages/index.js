import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Case Study</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="nav">
        <div className="container">
          <ul>
            <li>Register</li>
            <li>Sponsors</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="header">
        <div className="header-container">
          <h1>Customers will discover your business in no time</h1>
          <p>Our high-growth technical SEO strategies can make it happen</p>
          <a className="btn" href="#">
            Learn More
          </a>
        </div>
      </div>

      <div className="main">
        <div className="container">
          <img
            src="https://cl.ly/86aa6fea11db/download/lucas-benjamin-wQLAGv4_OYs-unsplash.jpg"
            height="120"
            width="200"
          />
          <h2>Outranked by your competitors?</h2>
          <p>
            Our carefully researched technical SEO strategies have a proven
            track record of quickly ranking sites in Google’s search engine
            results pages – even in the most competitive niches.
          </p>
          <p>
            A site that generates organic traffic via Google Search provides a
            constant stream of relevant potential customers, each of them
            discovering your brand at their exact moment of need.
          </p>
        </div>
      </div>

      <div className="jumbotron">
        <div className="container">
          <h2>Don’t just take our word for it</h2>
          <p>
            We’ve helped hundreds of clients grow their online exposure via
            Google, from large brands to startups and SMEs. We also advise and
            provide mentorship for Universities and Tech Incubator Programmes:
          </p>
          <a className="btn" href="#">
            Join
          </a>
        </div>
      </div>

      <div className="footer">
        <div className="container">
          <p>&copy; Angel Vazquez</p>
        </div>
      </div>

      <style jsx>{`
        .header {
          background: url(https://cl.ly/57ec67bf9917/download/ryan-stone-U3cctUBucn0-unsplash.jpg)
            no-repeat center center;
          background-size: cover;
          height: 800px;
          text-align: center;
        }

        .header-container {
          margin: 0 auto;
          max-width: 940px;
          padding: 0 10px;
        }

        .header .header-container {
          position: relative;
          top: 100px;
        }

        .header h1 {
          color: #fff;
          line-height: 125%;
          font-size: 72px;
          margin-top: 0;
          margin-bottom: 80px;
          text-transform: uppercase;
        }

        @media (max-width: 1050px) {
          .header h1 {
            font-size: 40px;
          }
        }

        @media (max-width: 414px) {
          .header h1 {
            font-size: 40px;
          }

          .header p {
            font-size: 16px;
          }
        }

        .header p {
          color: #fff;
          font-weight: 500;
          letter-spacing: 8px;
          margin-bottom: 40px;
          line-height: 125%;
          margin-top: 0;
          text-transform: uppercase;
        }

        .btn {
          color: #fff;
          background: #000;
          padding: 10px 40px;
          text-decoration: none;
          transition: background 0.5s;
        }

        .container {
          margin: 0 auto;
          max-width: 940px;
          padding: 0 10px;
        }

        .nav {
          background: #000;
          height: 80px;
          width: 100%;
        }

        .nav ul {
          height: 80px;
          list-style: none;
          margin: 0 auto;
          padding: 0;
        }

        .nav ul li {
          color: #fff;
          display: inline-block;
          height: 80px;
          line-height: 80px;
          list-style: none;
          padding: 0 10px;
          transition: background 0.5s;
        }

        .btn:hover,
        .nav ul li:hover {
          background: #117bff;
          cursor: pointer;
          transition: background 0.5s;
        }

        .main .container {
          margin: 80px auto;
        }

        .main img {
          float: left;
          margin: 50px 80px 50px 0;
        }

        .jumbotron {
          background: url(https://cl.ly/57ec67bf9917/download/ryan-stone-U3cctUBucn0-unsplash.jpg);
          background-size: cover;
          height: 600px;
        }

        .jumbotron .container {
          position: relative;
          top: 220px;
        }

        .jumbotron h2 {
          color: #fff;
          text-align: right;
        }

        .jumbotron p {
          color: #fff;
          text-align: right;
        }

        .jumbotron .btn {
          margin: 10px 0 0;
          float: right;
        }

        .footer {
          background: #000;
          height: 80px;
          padding-bottom: 50px;
        }

        .footer p {
          color: #fff;
          font-size: 14px;
          height: 80p;
          line-height: 80px;
          margin: 0;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        @media (max-width: 500px) {
          .header h1 {
            font-size: 50px;
            line-height: 64px;
          }

          .main,
          .jumbotron {
            padding: 0 30px;
          }

          .main img {
            width: 100%;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
