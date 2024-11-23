import styled from 'styled-components';

export const Modal=styled.div`
  width: 500px;
  height: 400px;
  border-radius: 70px 0px;
  background-color: white;
  padding: 30px;
`

export const Backdrop=styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 2;
  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    & ${Modal} {
      transform: translate(-50%, -50%) scale(1.1);
    }
  }
`;
export const Butt=styled.button`
    color: #fff;
    height: 45px;
    width: 150px;
    background: orange;
    border: none;
    border-radius: 20px;
    margin-left: 36px;
    padding: 10px;
    font-family: Montserrat Alternates;
`
export const Butt1=styled.button`
    color: #fff;
    background: orange;
    border: none;
    border-radius: 20px;
    font-family: Montserrat Alternates;
`
export const Text=styled.h2`
    font-family: Roboto;
    transition: all .15s linear;
`
export const Input=styled.input`
  margin-right:15px;
  border-radius: 10px;
`

