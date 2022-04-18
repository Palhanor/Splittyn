import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import Navegacao from "../../components/Navegacao";
import ListaAutoresCompra from "./ListaAutoresCompra";
import { useRecoilValue } from "recoil";
import { compras } from "../../states/atom";
import {
  Botao,
  Titulo,
  ItemCusto,
  ItemTexto,
  ListaContainer,
  ListaTitulo,
  Container,
  Inline,
} from "../../components/StyledComponents";
import useRemoveCompra from "../../hooks/useRemoveCompra";

export default function Compra() {
  const listaCompras = useRecoilValue(compras);
  const { ID } = useParams();
  const compra = listaCompras.find((dadosCompra) => dadosCompra.id === ID);
  const navigate = useNavigate();
  const removeCompra = useRemoveCompra();

  if (!compra) return <NotFound />;

  function apagarCompra(): void {
    removeCompra(ID);
    navigate("/compras");
  }

  return (
    <>
      <Container default>
        <Titulo secondary>{compra.nome}</Titulo>
        <Inline>
          <ItemTexto>
            {compra.autores.length} Consumidor
            {compra.autores.length === 1 ? "" : "es"}
          </ItemTexto>
          <ItemCusto>R$ {compra.preco.toLocaleString("BRL")}</ItemCusto>
        </Inline>
        <div>
          <Botao danger onClick={apagarCompra}>
            Apagar
          </Botao>
        </div>
      </Container>
      <ListaContainer>
        <ListaTitulo>Consumidores</ListaTitulo>
        {<ListaAutoresCompra compra={compra} />}
      </ListaContainer>
      <Navegacao />
    </>
  );
}
