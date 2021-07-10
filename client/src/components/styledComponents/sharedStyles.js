import styled from 'styled-components';

export const BackgroundStyles = styled.div`
    height: 95vh;
    background-image: linear-gradient(
        to right bottom, 
        rgba(126, 213, 111, 0.8), 
        rgba(40, 180, 133, 0.8)), 
        url(https://res.cloudinary.com/dl2itssx0/image/upload/v1625953805/photo-1522071820081-009f0129c71c_rdw56f.jpg);
    background-size: cover;
    background-position: top;
    position: relative;
    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
 `