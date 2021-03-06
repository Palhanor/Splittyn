/* IMPORTS */
import { atom } from "recoil";
import IConsumidor from "../interfaces/consumidor";
import ICompra from "../interfaces/compra";
import IConta from "../interfaces/conta";

/* ESTADO GLOBAL CONTA */
export const contaAtual = atom<IConta>({
  key: "conta",
  default: { nome: "", consumidores: [], compras: [], id: "" },
});

/* ESTADO GLOBAL CONSUMIDORES */
export const consumidores = atom<IConsumidor[]>({
  key: "listaConsumidores",
  default: [],
});

/* ESTADO GLOBAL COMPRAS */
export const compras = atom<ICompra[]>({ key: "listaCompras", default: [] });
