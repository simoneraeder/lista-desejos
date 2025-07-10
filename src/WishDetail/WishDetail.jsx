import { useParams } from "react-router";
import { useWishs } from "../components/hooks/useWishs";
import { useEffect, useState } from "react";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading } = useWishs();
  const [wishDetail, setWishDetail] = useState ({})
  useEffect(() => {
  setLoading(true);
    if (id && wishs.length > 0) {
      const foundWish = wishs.find((w) => wishs.id === Number.parseInt(id));
    setWishDetail(foundWish)
    }
    setLoading(false);
  }, [wishs, id]);
  if (loading) return <h1>Carregando...</h1>
  return (
    <>
      <h1>Detalhes do desejo com o id: {id}</h1>
    </>
  );
};
