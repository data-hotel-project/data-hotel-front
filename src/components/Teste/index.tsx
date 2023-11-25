import { StyledTeste } from "./style";

interface  iTeste{
    url: string
}

const Teste = (url:iTeste) => {
    return (
        <>
            <StyledTeste>
                <img src={url.url} alt="img" />
            </StyledTeste>
        </>
    );
};

export default Teste;