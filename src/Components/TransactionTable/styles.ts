import styled from 'styled-components'

export const PaginateContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 1;
`

export const Container = styled.div `
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th {
            color: var(--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }

        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            font-weight: 400;
            color: var(--text-body);
            border-radius: 0.25rem;

            &:first-child {
                color: var(--text-title);
            }
            
            &.income {
                color: var(--green);
            }

            &.expense {
                color: var(--red);
            }
        }
    }
`