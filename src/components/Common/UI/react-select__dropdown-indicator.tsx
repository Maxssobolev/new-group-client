import { ReactComponent as CustomArrow } from '../../../assets/img/arrow-down-select.svg';
import { components } from 'react-select';

export const DropdownIndicator = (props: any) => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        {props.selectProps.menuIsOpen ? (
          <CustomArrow
            width={25}
            style={{ transform: 'rotate(180deg)', marginRight: '5px' }}
            fill="none"
            className="select-open-dropdown"
          />
        ) : (
          <CustomArrow width={25} fill="none" style={{ marginRight: '5px' }} />
        )}
      </components.DropdownIndicator>
    )
  );
};
