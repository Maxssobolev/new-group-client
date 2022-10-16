import styled from 'styled-components';

const Block = styled.div`
  display: grid;
  grid-template-rows: 30px 109px 40px;
  width: 490px;
  height: 220px;
  border-radius: 10px;
  background-color: var(--white);
  box-shadow: var(--sc-box-shadow);
  color: var(--black);
  font-size: var(--fz-small);
  flex-shrink: 0;
  padding: 20px;
  box-sizing: border-box;
`;

const Date = styled.div`
  font-weight: 400;
  font-size: var(--fz-extra-small);
  color: var(--accent);
`;

const Content = styled.div`
  font-size: var(--fz-extra-small);
`;

const Title = styled.div`
  font-weight: 700;
  font-size: var(--fz-small);
`;

const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const SCNewsCard = { Block, Date, Title, Content, Footer };
