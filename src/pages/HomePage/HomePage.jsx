import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <section>
        <h1 className={css.display}>Welcome to CamperRent!</h1>
        <p className={css.sub}>
          Your reliable partner in the world of wheel-based adventures.
        </p>
      </section>
      <section>
        <h2 className={css.title}>Our Services</h2>
        <p className={css.text}>
          We offer a wide selection of campers for rent to ensure your comfort
          during your travels:
        </p>
        <ul className={css.list}>
          <li>
            Campers of various sizes: from compact models to family mobile
            homes.
          </li>
          <li>
            Fully equipped campers with kitchenware, sleeping areas, and
            autonomous systems.
          </li>
          <li>
            Additional equipment available on request, including bicycles,
            kayaks, and other sports gear.
          </li>
        </ul>
      </section>
      <section>
        <h2 className={css.title}>About Us</h2>
        <p className={css.text}>
          CamperRent is a company with many years of experience in camper
          rentals. We guarantee high-quality service and support at every step
          of your journey.
        </p>
      </section>
      <footer>
        <p className={css.title}>Contact Us</p>
        <p className={css.text}>
          Call us at:{" "}
          <a className={css.phone} href="tel:+380123456789">
            +380 123 456 789
          </a>{" "}
          or visit our office at:
        </p>
        <address className={css.text}>Kyiv, Khreshchatyk St, 24.</address>

        <p className={css.text}>&copy; 2024 CamperRent. All rights reserved.</p>
      </footer>
    </div>
  );
}
