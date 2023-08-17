import "./Header.css"; // Import CSS file for Header component
import "./MainContent.css"; // Import CSS file for MainContent component
import "./Footer.css"; // Import CSS file for Footer component

function Header() {
  return <h1 className="header"> Apple</h1>;
}

function MainContent() {
  return (
    <section className="main-content">
      <h2>iPhone 14</h2>
      <img src="https://www.apple.com/v/iphone-14/i/images/key-features/features/size/size_yellow__dnv9794q7loy_medium.jpg"></img>
      <ul>
        <li>Face ID</li>
        <li>Up to 26 hours</li>
        <li>Advanced dual-camera system</li>
        <li>Super Retina XDR display2</li>
        <li>Superfast 5G cellular5</li>
      </ul>
      <h3>From $799</h3>
    </section>
  );
}

function Footer() {
  return <p className="footer">made by Iri</p>;
}

function App() {
  // Render components within App
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
