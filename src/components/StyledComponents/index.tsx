/* IMPORTS */
import styled, { css } from 'styled-components';
import { brkpt, color } from "../../styles"
import { IBotaoProps, IContainerProps, IInlineProps, ITituloProps } from '../../interfaces/styled';

/* STYLED COMPONENTS */
export const Botao = styled.button`
    display: block;
    margin: 2rem auto 0;
    width: 100%;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: ${color.theme};
    font-family: inherit;
    color: ${color.white};

    @media (min-width: ${brkpt.tablet}) {
        font-size: 1.2rem;
        padding: 1rem;
    }

    ${(props: IBotaoProps) => props.secondary && css`
        border: 2px solid ${color.white};
        width: 60%;
        margin: 2rem auto 1rem;
    `};

    ${(props: IBotaoProps) => props.danger && css`
        border: 2px solid ${color.red};
        background-color: ${color.white};
        color: ${color.red};
        margin: 2rem auto 1rem;
    `};
`;
export const Input = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid ${color.theme};
    padding: .8rem 0 .4rem;
    font-size: 1rem;
    margin-bottom: 1.2rem;
    display: block;
    font-family: inherit;

    :focus {
        outline: none;
        border-bottom: 2px solid ${color.theme};
    }

    @media (min-width: ${brkpt.tablet}) {
        font-size: 1.2rem;
    }
`;
export const Label = styled.label`
    display: none;
`;
export const Image = styled.img`
    display: block;
    margin: auto;
    height: 18rem;

    @media (min-width: ${brkpt.tablet}) {
        height: 26rem;
    }

    @media (min-width: ${brkpt.desktop}) {
        position: fixed;
        right: 10%;
        top: 50%;
        transform: translateY(-50%);
    }
`;
export const Titulo = styled.h1`
    font-size: 2rem;
    margin: 2rem 0;
    font-weight: 600;
    text-align: center;
    color: ${color.white};

    @media (min-width: ${brkpt.tablet}) {
        font-size: 3rem;
        margin: 3rem 0;
    }

    @media (min-width: ${brkpt.desktop}) {
        margin: 0;
        text-align: left;
    }

    ${(props: ITituloProps) => props.secondary && css`
        color: ${color.black};
        font-size: 1.6rem;
        margin: 0 0 2rem;
        font-weight: 600;
        text-align: left;

        @media (min-width: ${brkpt.tablet}) {
            font-size: 2rem;
            margin: 0 0 2rem;
        }
    `};
`;
export const Container = styled.div`
    background-color: ${color.white};
    box-sizing: border-box;
    padding: 3rem 2rem;
    width: 100%;

    @media (min-width: ${brkpt.tablet}) {
        border-radius: 15px;
        width: 90%;
    }

    @media (min-width: ${brkpt.desktop}) {
        margin: 0 3% 0 0;
        order: 2;
        padding: 3rem;
    }

    ${(props: IContainerProps) => props.default && css`
        width: 90%;
        margin: 2rem auto;
        border-radius: 10px;
        padding: 1rem;

        @media (min-width: ${brkpt.tablet}) {
            margin: 3rem auto;
            padding: 2rem;
        }

        @media (min-width: ${brkpt.desktop}) {
            border-radius: 0 10px 10px 0;
            width: 50vw;
            height: 75vh;
            margin: 0 3% 0 0;
        }
    `}

    ${(props: IContainerProps) => props.top && css`
        margin: 0 auto 2rem;
        border-radius: 0 0 40px 40px;

        @media (min-width: ${brkpt.tablet}) {
            margin: 3rem auto;
        }

        @media (min-width: ${brkpt.desktop}) {
            border-radius: 0 10px 10px 0;
            width: 50vw;
            height: 75vh;
            margin: 0 3% 0 0;
        }
    `};

    ${(props: IContainerProps) => props.bottom && css`
        position: absolute;
        bottom: 0;
        border-radius: 40px 40px 0 0;

        @media (min-width: ${brkpt.tablet}) {
            width: calc(100% - 4rem);
            margin: 0;
            bottom: 3rem;
            left: 2rem;
        }

        @media (min-width: ${brkpt.desktop}) {
            border-radius: 10px;
            width: 40vw;
            height: 65vh;
        }
    `};
`;
export const Lista = styled.ul`
    padding: 0;
    list-style: none;
`;
export const ListaContainer = styled.section`
    @media (min-width: ${brkpt.desktop}) {
        order: 3;
        width: 40vw;
        overflow-y: scroll;
        height: 90vh;
        scrollbar-width: thin;
        
        ::-webkit-scrollbar { /* width */
            width: 8px;
        }
        
        ::-webkit-scrollbar-track { /* Track */
            background: rgba(${color.black}, .3); 
        }
        
        ::-webkit-scrollbar-thumb { /* Handle */
            background: rgba(${color.white}, .3);

            :hover {
                background: rgba(${color.white}, .25);
            }
        }
    }
`;
export const ListaTitulo = styled.h2`
    font-size: 1.4rem;
    color: ${color.white};
    margin: 1rem 5% 1.5rem;
    font-weight: 600;

    @media (min-width: ${brkpt.tablet}) {
        font-size: 1.8rem;
        margin: 1rem 5% 2rem;
    }

    @media (min-width: ${brkpt.desktop}) {
        margin: 0 0 2rem;
    }
`;
export const Item = styled.li`
    width: 90%;
    background-color: ${color.white};
    margin: 1rem auto;
    border-radius: 10px;
    padding: 1rem;
    box-sizing: border-box;
    cursor: pointer;

    @media (min-width: ${brkpt.tablet}) {
        padding: 1.5rem;
    }

    @media (min-width: ${brkpt.desktop}) {
        width: 100%;
        border-radius: 5px;
    }
`;
export const ItemNome = styled.strong`
    font-weight: 700;
    font-size: 1.2rem;

    @media (min-width: ${brkpt.tablet}) {
        font-size: 1.5rem;
    }
`;
export const ItemCusto = styled.span`
    color: ${color.red};
    text-align: right;
    font-weight: 500;
    font-size: 1rem;

    @media (min-width: ${brkpt.tablet}) {
        font-size: 1.2rem;
    }
`;
export const ItemTexto = styled.span`
    font-size: .9rem;
    color: ${color.gray};

    @media (min-width: ${brkpt.tablet}) {
        font-size: 1rem;
    }
`;
export const Inline = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${(props: IInlineProps) => props.mb && css`
        margin-bottom: .5rem;

        @media (min-width: ${brkpt.desktop}) {
            margin-bottom: .8rem;
        }
    `};
`;