import { SVGProps } from 'react';

const Icons = {
  plus: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#666666" />
    </svg>
  ),
  cancel: (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.41421 8.50002L15.7782 14.864L14.364 16.2782L8 9.91423L1.63604 16.2782L0.221826 14.864L6.58579 8.50002L0.221826 2.13605L1.63604 0.721841L8 7.0858L14.364 0.721841L15.7782 2.13605L9.41421 8.50002Z"
        fill="#666666"
      />
    </svg>
  ),
  dropdown: (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1.74577 6.24585L0.92081 5.42089L5.99996 0.341745L11.0791 5.42089L10.2541 6.24585L5.99996 1.99166L1.74577 6.24585Z"
        fill="#666666"
      />
    </svg>
  ),
};

type IconsProps = SVGProps<SVGSVGElement> & {
  icon: 'plus' | 'cancel' | 'dropdown';
};

export const Icon = ({ icon, ...props }: IconsProps) => {
  const SelectedIcon = { ...Icons[icon], ...props };
  return SelectedIcon;
};
