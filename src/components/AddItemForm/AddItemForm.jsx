import { useState } from "react";
export const AddItemForm = ({handleSubmit, form, setForm}) =>{
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    return (
        <>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Desejo</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Descrição</label>
            <input
              type="text"
              name="description"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="">URL Imagem</label>
            <input
              type="text"
              name="urlImage"
              value={form.urlImage}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Adicionar</button>
        </form>
        </>
      );
    }