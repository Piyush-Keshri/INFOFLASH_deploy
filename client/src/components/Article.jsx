import { Card, CardContent, Typography, Box, styled, Grid } from "@mui/material";




const Component = styled(Card)`
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%);
    width :70%;
    background:#eee;
   margin:auto;
   margin-bottom:20px;
`;

const Container = styled(CardContent)`
    display: flex;
    padding: 8px;
    padding-bottom: 4px !important;
`;

const Image = styled('img')({
    height: 268,
    width: '88%',
    borderRadius: 5,
    objectFit: 'cover'
});

const RightContainer = styled(Grid)(({ theme }) => ({
    margin: '5px 0px 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.between('sm', 'lg')]: {
        padding: '0 5px'
    },
    [theme.breakpoints.down('sm')]: {
        margin: '5px 0'
    }
}));

const Title = styled(Typography)`
    font-weight: 300;
    color: #44444d;
    font-size: 22px;
    line-height: 27px;
`;

const Author = styled(Typography)`
    color: #808290;
    font-size: 12px;
    line-height: 22px;
`;

const Description = styled(Typography)`
    line-height: 22px;
    color: #44444d;
    margin-top: 5px;
    font-family: 'Roboto',sans-serif;
    font-weight: 300;
`;

const Short = styled('b')({
    color: '#44444d',
    fontFamily: "'Convergence', sans-serif"
})

const Publisher = styled(Typography)`
    font-size: 12px;
    margin-top: auto;
    margin-bottom: 10px;
    '& > *': {
        textDecoration: 'none',
        color: '#000',
        fontWeight: 900
    }
`;

const Article = ({ data }) => {
    const imgUrl = 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';
    return (

        <Component>
            <Container>
                <Grid container>
                    <Grid lg={5} md={5} sm={5} xs={12} item>
                        <Image src={data.image === 'None' ? imgUrl : data.image} />
                    </Grid>
                    <RightContainer lg={7} md={7} sm={7} xs={12} item>
                        <Title>{data.title}</Title>
                        <Author>
                            <Short>short</Short> by {data.author} / {data.published}
                        </Author>
                        <Description>{data.description}</Description>
                        <Publisher>
                            read more at <a href={data.url} target='_blank'>{data.category[0]}</a>
                        </Publisher>
                    </RightContainer>
                </Grid>
            </Container>
        </Component>
    )
}

export default Article;