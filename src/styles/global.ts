import styled, { createGlobalStyle, css } from 'styled-components'

interface FlexProps {
    column?: boolean;
    flex?: number;
    wrap?: boolean;
    maxWidth?: number | string;
    width?: number;
    justifyContent?: 'space-between' | 'space-around' | 'flex-start' | 'flex-end' | 'center';
    alignItems?: 'center' | 'flex-start' | 'flex-end';
    gap?: number;
    marginVertical?: number;
    marginHorizontal?: number;
    marginTop?: number | 'auto';
    marginBottom?: number | 'auto';
    marginLeft?: number | 'auto';
    marginRight?: number | 'auto';
    fullWidth?: boolean;
  }
  
  export const Flex = styled.div<FlexProps>`
    display: flex;
    flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
    align-items: ${props => props.alignItems || 'stretch'};
    justify-content: ${props => props.justifyContent || 'stretch'};
    flex: ${props => props.flex || 'stretch'};
    flex-direction: ${props => (props.column ? 'column' : 'row')};
    gap: ${props => `${props.gap}rem` || 'stretch'};
    margin-top: ${props =>
      props.marginTop === 'auto' ? props.marginTop : `${props.marginTop || 0}rem`};
    margin-right: ${props =>
      props.marginRight === 'auto' ? props.marginRight : `${props.marginRight || 0}rem`};
    margin-bottom: ${props =>
      props.marginBottom === 'auto' ? props.marginBottom : `${props.marginBottom || 0}rem`};
    margin-left: ${props =>
      props.marginLeft === 'auto' ? props.marginLeft : `${props.marginLeft || 0}rem`};
    ${props =>
      (props.marginVertical || props.marginHorizontal) &&
      css`
        margin: ${props.marginVertical || 0}rem ${props.marginHorizontal || 0}rem;
      `};
  
    max-width: ${({ maxWidth }) =>
      maxWidth ? (typeof maxWidth === 'string' ? maxWidth : `${maxWidth}rem`) : 'none'};
    width: ${props =>
      (props.fullWidth ? '100%' : 'auto') || props.width ? `${props.width}rem` : 'auto'};
  `;


export const GlobalStyle = createGlobalStyle `
    :root {
        --background: #f8f2f5;
        --green: #33CC95; 
        --red: #E52E4D;
        --blue: #5429CC;
        --blue-light: #6933ff;
        --text-title: #363F5F;
        --text-body: #969CB3;
        --shape: #FFFFFF;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1088px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased; 
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }
    
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;
        border: 0;
        font-size: 1rem;

        &:hover {
            filter: brightness(0.9);
        }  

    }

    .react-modal-overlay {
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;        
    }

    .react-modal-content {
        width: 100%;
        max-width: 576px;
        background: ${({ theme }) => theme.colors.background};
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border: 0;
        background: transparent;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`