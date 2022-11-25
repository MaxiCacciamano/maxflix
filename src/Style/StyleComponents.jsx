import styled from 'styled-components'
import {InputBase } from '@material-ui/core'

// export const type

export const NetflixInput = styled(InputBase)`
 background-color:#fff;
 z-index:15;
 height:48px;
 border-radius:5px;
 border:none;
`

export const NetflixButton = styled.button`
background-color:${(props)=>props.color === "gray"?"lightgray":"red"};
cursor:pointer;
padding:15px;
color:#fff;
font-weight:bold;
text-transform:inherit;
border-radius:5px;
font-size:1.1rem;
outline:none;
border:none; 
`