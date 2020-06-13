import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    {
      title: "Banho",
      image: "banho.svg",
    },
    {
      title: "Alimentação",
      image: "alimentacao.svg",
    },
    {
      title: "Pernoite",
      image: "pernoite.svg",
    },
    {
      title: "Água",
      image: "agua.svg",
    },
    {
      title: "Oficina",
      image: "oficina.svg",
    },
    {
      title: "Abastecimento",
      image: "bomba.svg",
    },
  ]);
}
