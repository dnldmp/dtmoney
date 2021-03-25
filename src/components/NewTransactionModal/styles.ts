import styled from 'styled-components';
import { darken, transparentize } from 'polished'

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: #e7e9ee;
    border: 1px solid #d7d7d7;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder{
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;
    font-weight: 600;

    &:hover{
      filter: brightness(0.8);
    }
  }
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E52E3D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: ${(props) => props.isActive 
    ? transparentize(0.9, colors[props.activeColor])
    : 'transparent' 
  };
  transition: border-color 0.2;

  &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img{
    margin-right: 1rem;
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block;
    font-size: 1rem;
    color: var(--text-title);
  }
`