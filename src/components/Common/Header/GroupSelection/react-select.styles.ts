// @ts-nocheck
export const customSelectStyles = {
  control: styles => ({
    ...styles,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    borderRadius: '12px',
    boxShadow: 'none',
    minWidth: '100%',
    padding: '0 0 0 10px',
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
    padding: '0 0 0 10px',
    width: '100%',
    fontFamily: 'Gilroy',
    fontSize: 'var(--fz-medium)',
    fontWeight: 600,
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
