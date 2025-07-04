import { Card } from "../Card/Card";
import { EmpyState } from "../EmptyState/EmptyState";
import styles from "./CardGrid.module.css";

export const CardGrid = ({ wishs, handleDelete, search }) => {
  const isSearching = search && search.length > 0;
  const isEmptyList = wishs && wishs.length === 0;
  return (
    <>
      {isEmptyList ? (
        <EmpyState />
      ) : (
        <div className={styles.grid}>
          {wishs.map((wish, index) => (
            <Card
              key={`${wish.name}-${index}`}
              name={wish.name}
              description={wish.description}
              image={wish.urlImage}
              date={wish.date}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      )}
    </>
  );
};
