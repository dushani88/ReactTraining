function Header() {
  return (
    <>
      <header className="header">
        <img src="/react-logo.png" alt="Logo" className="nav-logo" />
        <nav>
          <ul className="nav-list">
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">About</li>
            <li className="nav-list-item">Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2025 Dushan Gunawardena. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I am exited to learn React</h1>
      <ol>
        <li>
          React is a popular library, so I will be able to fit in with all the
          coolest devs out there! 😎
        </li>
        <li>
          I am more likely to get a job as a front end developer if I know React
        </li>
      </ol>
    </main>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
export default Page;
