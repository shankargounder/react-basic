export function Tabs({children, buttons, buttonsContainer}) {
    const ButtonContainer = buttonsContainer;
    return(
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            { children }
        </> )
}