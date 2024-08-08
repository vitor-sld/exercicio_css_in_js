import styled from 'styled-components'

export const Formulario = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`
export const DivFormulario = styled.div`
  position: relative;
  z-index: 2;
`
export const Titulo = styled.h2`
  font-family: Gloock, serif;
  color: #fff;
  z-index: 3;

  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`
