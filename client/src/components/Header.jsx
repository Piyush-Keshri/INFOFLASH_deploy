
import { AppBar, Toolbar, styled, Typography, Box } from '@mui/material';
import { Menu } from '@mui/icons-material'


const StyledHeader = styled(AppBar)`

    background:#ffffff;
    height:80px;

`;

const StyledMenu = styled(Menu)`
    color:#000;
`;

const StyledImage = styled('img')({
    height: '70px',
    margin: 'auto'

})


const Header = () => {
    const imgUrl = "https://i.ibb.co/W2fCn3j/logo-no-background.png";

    return (
        <StyledHeader position='static'>
            <Toolbar>
                <StyledMenu />
                <StyledImage src={imgUrl} alt='logo' />
            </Toolbar>

        </StyledHeader>
    );
}


export default Header;
