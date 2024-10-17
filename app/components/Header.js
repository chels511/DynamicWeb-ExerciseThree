import styles from "../page.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
      <div className="title">Weather App</div>
      <nav>
        <ul>
          <li>
            <a href="/city/Tokyo">Tokyo</a>
          </li>
          <li>
            <a href="/city/Goobertown">Goobertown</a>
          </li>
          <li>
            <a href="/city/Anchorage">Anchorage</a>
          </li>
          <li>
            <a href="/city/Mumbai">Mumbai</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
