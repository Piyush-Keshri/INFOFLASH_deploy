import { Box, Typography, styled } from '@mui/material'


const StyledBox = styled(Box)`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
    margin: 10px 70px;
    height:10vh;
    border-radius:10px;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}  
`
const StyledText = styled(Typography)`
    color:beige;
    font-size : 22px;
    padding:8px;
    text-align:center;
`

const InfoHeader = () => {

    return (
        <StyledBox>
            <StyledText>From local stories to global events, stay informed with our comprehensive news coverage.</StyledText>
        </StyledBox>

    )

}

export default InfoHeader;