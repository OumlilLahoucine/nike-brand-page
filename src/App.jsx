import { useState } from "react";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className={`header ${navOpen ? "nav-open" : ""}`}>
      <picture>
        <source srcSet="./nike-brand-page/images/logo.webp" type="image/webp" />
        <source srcSet="./nike-brand-page/images/logo.png" type="image/png" />
        <img src="./nike-brand-page/images/logo.png" alt="Nike logo" className="img-logo" />
      </picture>

      <nav className="navigation">
        <Link text="Menu" onClick={() => setNavOpen(false)} />
        <Link text="Location" onClick={() => setNavOpen(false)} />
        <Link text="About" onClick={() => setNavOpen(false)} />
        <Link text="Contact" onClick={() => setNavOpen(false)} />
        <Button text="Login" type="login" onClick={() => setNavOpen(false)} />
      </nav>
      <Button text="Login" type="login" />

      <button
        aria-label="Open and close navbar"
        className="btn-menu"
        onClick={() => setNavOpen((cur) => !cur)}
      >
        <ion-icon
          name={`${navOpen ? "close-outline" : "menu-outline"}`}
        ></ion-icon>
      </button>
    </header>
  );
}

function Hero() {
  return (
    <main className="container hero">
      <TextBox />
      <ImageBox />
    </main>
  );
}

function TextBox() {
  return (
    <div className="text-box">
      <h1 className="primary-headline">Your feet deserve the best</h1>
      <p className="description">
        Your feet deserve the best and we’re here to help you with our
        shoes.your feet deserve the best and we’re here to help you with our
        shoes.
      </p>
      <div className="buttons">
        <Button text="Shop now" />
        <Button text="Category" type="secondary" />
      </div>
      <div className="available">
        <span>Also available on</span>
        <ul>
          <Market imageName="etsy.png" alt="Etsy site" />
          <Market imageName="amazon.png" alt="Amazon site" />
        </ul>
      </div>
    </div>
  );
}

function ImageBox() {
  return (
    <div className="image-box">
      <picture>
        <source srcSet="/images/domino-cropped.webp" type="image/webp" />
        <source srcSet="/images/domino-cropped.png" type="image/png" />
        <img
          src="/images/domino-cropped.png"
          alt="Nike domino"
          className="domino-img"
        />
      </picture>
    </div>
  );
}

function Button({ type = "primary", text, href = "#", onClick = {} }) {
  let style = "";
  if (type === "primary") {
    style = "btn-shop";
  } else if (type === "secondary") {
    style = "btn-category";
  } else {
    style = "btn-nav";
  }
  return (
    <a
      href={href}
      className={`btn ${style}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </a>
  );
}

function Market({ imageName, alt = "Image", href = "#" }) {
  return (
    <li>
      <a href={href}>
        <img src={`/images/${imageName}`} alt={alt} className="market-img" />
      </a>
    </li>
  );
}

function Link({ href = "#", text, onClick }) {
  return (
    <a
      href={href}
      className="nav-link"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {text}
    </a>
  );
}
