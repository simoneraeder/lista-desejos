import { useState, useCallback } from "react";
import styles from "./Header.module.css";


export const Header = ({onSearch}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      onSearch(searchValue);
    },
    [searchValue, onSearch]
  );

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchValue(value);
      }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Meus desejos</h1>
        <form className= {styles.searchForm} onSubmit={handleSubmit}>
          <div className={styles.searGroup}>
<input
 type="text" 
 placeholder="Pesquisar desejos..."
 value={searchValue}
  onChange={handleChange} 
  className={styles.input} 
  />
  <button type="submit" className={styles.button}>Pesquisar</button>
          </div>
        </form>
      </div>
    </header>
  );
};
