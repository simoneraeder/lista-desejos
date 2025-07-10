import { Route, Routes } from "react-router";
import App from "../App";
import { useCallback, useState } from "react";
import { Layout } from "../Layout/Layout";
import { WishDetail } from "../WishDetail/WishDetail";

export const Router = () => {
  const [search, setSearch] = useState("");

  const onSearch = useCallback((searchValue) => {
    setSearch(searchValue);
  });
  const onClear = useCallback(() => {
    setSearch("");
  });

  return (
    <Routes>
      <Route element={<Layout onClear={onClear} onSearch={onSearch} />}>
        <Route path="/lista-desejos" element={<App search={search} />} />
        <Route path="lista-desejos/lista/:id" element={<WishDetail />} />
        <Route path="/*" element={<App search={search} />} />
      </Route>
    </Routes>
  );
};
