// @ts-nocheck
export const customSelectStyles = {
  control: styles => ({
    ...styles,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    borderBottom: '1px solid var(--gray-blue)',
    outline: 'none',
    borderRadius: '0',
    boxShadow: 'none',
    minWidth: '100%',
    padding: '0 0 0 0',
    height: '50px',
    color: 'var(--black)',
    '&:hover': {
      borderColor: '',
    },
  }),
  container: styles => ({
    ...styles,
    width: '100%',
    '@media (max-width: 375px)': {
      ...styles['@media (max-width: 375px)'],
      width: '100%',
    },
  }),
  valueContainer: styles => ({
    ...styles,
    padding: '0 0 0 0',
    width: '100%',
    fontFamily: 'Gilroy',
    fontSize: 'var(--fz-extra-small)',
    fontWeight: 500,
    zIndex: 100,
  }),
  indicatorSeparator: styles => ({
    ...styles,
    backgroundColor: 'transparent',
  }),
  placeholder: styles => ({
    ...styles,
    color: 'var(--black)',
  }),
  singleValue: styles => ({
    ...styles,
    color: 'var(--black)',
  }),
  menu: styles => ({
    ...styles,
    width: '100%',
    right: 0,
    zIndex: 99999999,
  }),
  menuPortal: styles => ({
    ...styles,
    zIndex: 100000,
  }),
};
