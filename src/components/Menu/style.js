import styled, { css } from 'styled-components';

const Actions = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Action = styled.li`
  position: relative;
  text-decoration: none;
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: var(--red);
        left: 0;
        bottom: -0.2rem;
      }
    `}
  &:not(:last-of-type) {
    margin-right: 1rem;
  }
`;

export { Actions, Action };
