import styled from 'styled-components';

export const Header = styled.div<{ size?: 's' | 'm' | 'l' | 'xl'; bold?: boolean; withSort?: boolean }>`
  ${props => (props.withSort ? { display: 'flex', alignItems: 'center' } : {})}
  color: var(--black);
  font-weight: ${props => (props.bold ? 700 : 500)};
  font-size: ${props => {
    switch (props.size) {
      case 's':
        return 'var(--fz-small)';
      case 'm':
        return 'var(--fz-medium)';
      case 'l':
        return 'var(--fz-large)';
      case 'xl':
        return 'var(--fz-extra-large)';
      default:
        return 'var(--fz-medium)';
    }
  }};

  margin: ${props => {
    switch (props.size) {
      case 's':
        return '15px 0';
      case 'm':
        return '15px 0';
      case 'l':
        return '25px 0';
      case 'xl':
        return '25px 0';
      default:
        return '15px 0';
    }
  }};
`;

export const SubHeader = styled.span<{ size?: 's' | 'm' | 'l' | 'xl'; bold?: boolean }>`
  color: var(--accent);
  margin-left: 10px;
  font-weight: ${props => (props.bold ? 700 : 500)};
  font-size: ${props => {
    switch (props.size) {
      case 's':
        return 'var(--fz-small)';
      case 'm':
        return 'var(--fz-medium)';
      case 'l':
        return 'var(--fz-large)';
      case 'xl':
        return 'var(--fz-extra-large)';
      default:
        return '0.85em';
    }
  }};
`;
