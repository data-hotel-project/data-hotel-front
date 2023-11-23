import { IChildrenProps } from "../../interface";
import { StyledBackground } from "./style";

const Background = ( {children}:IChildrenProps ) => {
    return (
        <StyledBackground>
            {children}
        </StyledBackground>
    );
};

export default Background;