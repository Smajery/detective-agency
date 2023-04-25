import {StyledCopyright, StyledFooter} from './StyledFooter';

const Footer = () => {
    return (
        <StyledFooter>
            <div className='container'>
                <StyledCopyright>
                    Детективне агентство «Дірка Джентлі» 2023 &copy; Всі права захищені.
                </StyledCopyright>
            </div>
        </StyledFooter>
    );
};

export default Footer;