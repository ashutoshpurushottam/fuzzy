import headerStyles from '../styles/Header.module.css';

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Fuzzy</span> Search
      </h1>
      <p className={headerStyles.description}>Try React Fuzzy Search</p>
    </div>
  );
};

export default Header;
