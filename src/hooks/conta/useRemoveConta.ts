/* IMPORTS */
import IConta from "../../interfaces/conta";
import useHistorico from "./useHistorico";

/************************
O hook recebe um ID (string) referente à uma conta
Então acessa o histórico de contas e remove a conta que possúi este ID
Após isso passa o novo estado para o localStorage
************************/
function useRemoveConta(): ((contaID: (string | undefined)) => void) {
    const historico: IConta[] = useHistorico()();
    return (contaID: (string | undefined)) => {
        const novoHistorico: IConta[] = historico.filter((conta) => conta.id !== contaID);
        localStorage.setItem("historicoContas", JSON.stringify(novoHistorico));
    }
}

export default useRemoveConta;