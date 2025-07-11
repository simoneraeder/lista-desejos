import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./App.module.css";
import { CardGrid } from "./components/CardGrid/CardGrid";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { AddItemForm } from "./components/AddItemForm/AddItemForm";
import { useWishs, DEFAULT_FORM } from "./hooks/useWishs";



function App({ search }) {
  const {wishs, setWishs, form, setForm}   = useWishs();

  const filteredWishs = useMemo(() => {
    if (!search.trim()) {
      return wishs;
    }
    return wishs.filter((wishs) => {
      const seachLower = search.toLowerCase();
      return (
        wishs.name.toLowerCase().includes(seachLower) ||
        wishs.description.toLowerCase().includes(seachLower)
      );
    });
  }, [search, wishs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newId =
    wishs.length > 0 ? Math.max(...wishs.map((w) => Number (w.id))) + 1 : 1;
    const newWish = {...form, id: newId};
    const updatedWishs = [...wishs, newWish];
    setWishs(updatedWishs);
    setForm(DEFAULT_FORM);
  };

  const handleDelete = useCallback(
    (indexToDelete) => {
      const updatedWishs = wishs.filter((_, index) => index !== indexToDelete);
      setWishs(updatedWishs);
    },
    [wishs]
  );

  return (
    <main className={styles.main}>
      <AddItemForm handleSubmit={handleSubmit} form={form} setForm={setForm} />
      <CardGrid
        wishs={filteredWishs}
        handleDelete={handleDelete}
        search={search}
      />
    </main>
  );
}

export default App;
