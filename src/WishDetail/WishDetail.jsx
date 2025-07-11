import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useWishs } from "../hooks/useWishs";
import { formatDate } from "../utils/formatDate";
import { AddItemForm } from "../components/AddItemForm/AddItemForm";
import styles from "./WishDetail.module.css";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading, form, setForm, setWishs } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((wish) => wish.id === Number.parseInt(id));
      setWishDetail(foundWish);
      setForm({
        name: foundWish.name,
        description: foundWish.description,
        urlImage: foundWish.urlImage,
        date: foundWish.date || "",
      });
    }
    setLoading(false);
  }, [wishs, id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateWish = { ...form, id: wishDetail.id };
    setWishs((prev) =>
      prev.map((wish) => (wish.id === updateWish.id ? updateWish : wish))
    );
    setIsEditing(false);
  };

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        <button className={styles.btn} onClick={() => navigate(-1)}>
          ⬅️ Voltar
        </button>

        <button className={styles.btn} onClick={handleEditToggle}>
          {isEditing ? "❌ Cancelar" : " ✏️ Editar"}{" "}
        </button>
      </div>
      {isEditing ? (
        <>
          <div className={styles.content}>
            <AddItemForm
              handleSubmit={handleUpdate}
              setForm={setForm}
              form={form}
            />
          </div>
        </>
      ) : (
        <>
          <div className={styles.content}>
            <h1 className={styles.title}>Detalhes do desejo com o id: {id}</h1>
            <div className={styles.imgContainer}>
              <img
                className={styles.img}
                src={wishDetail.urlImage}
                alt={wishDetail.name}
              />
            </div>
            <p className={styles.name}>{wishDetail.name}</p>
            <p className={styles.desc}>{wishDetail.description}</p>
            <p>{formatDate(wishDetail.date)}</p>
            <p className={styles.date}>{formatDate(wishDetail.date)}</p>
          </div>
        </>
      )}
    </div>
  );
};
