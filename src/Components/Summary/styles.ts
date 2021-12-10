import styled from "styled-components"

export const Container = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    
    gap: 2rem;
    margin-top: -10rem;

    div {
        flex: 1;
        min-width: 20rem;
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0%.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &.highLightBackground {
            background: var(--green);
            color: #FFF;
        }

    }
`