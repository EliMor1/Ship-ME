import styled from 'styled-components'


export const Submit = styled.input`
background-color: #007991;
color: white;
font-size: 12px;
font-weight:bold;
height:37px;
width:62%;
border-radius: 3px;
cursor: pointer;
&:disabled {
  color: grey;
  opacity: 0.7;
  cursor: default;
}
`;