// import { Box, Typography, styled } from '@mui/material'

// const StyledBox = styled(Box)`
//     background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
//     background-size: 400% 400%;
//     animation: gradient 15s ease infinite;
//     margin: 10px 70px;
//     height: 10vh;
//     border-radius: 10px;

//     @keyframes gradient {
//         0% {
//             background-position: 0% 50%;
//         }
//         50% {
//             background-position: 100% 50%;
//         }
//         100% {
//             background-position: 0% 50%;
//         }
//     }

//     /* Media query to hide the component below 900px screen width */
//     @media (max-width: 900px) {
//         display: none;
//     }
// `

// const StyledText = styled(Typography)`
//     color: beige;
//     font-size: 22px;
//     padding: 8px;
//     text-align: center;
// `

// const InfoHeader = () => {
//     return (
//         <StyledBox>
//             <StyledText>From local stories to global events, stay informed with our comprehensive news coverage.</StyledText>
//         </StyledBox>
//     )
// }

// export default InfoHeader;

import { Box, Typography, styled } from '@mui/material'

const StyledBox = styled(Box)`
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    margin: 10px 10px; /* Adjust margin for mobile */
    padding: 10px; /* Add some padding for mobile */
    border-radius: 10px;
    text-align: center; /* Center text for mobile */

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

    /* Media query for mobile devices */
    @media (max-width: 600px) {
        margin: 10px; /* Adjust margin for smaller screens */
        height: auto; /* Let the height be determined by content */
    }
`

const StyledText = styled(Typography)`
    color: beige;
    font-size: 16px; /* Adjust font size for mobile */
`

const InfoHeader = () => {
    return (
        <StyledBox>
            <StyledText>From local stories to global events, stay informed with our comprehensive news coverage.</StyledText>
        </StyledBox>
    )
}

export default InfoHeader;
