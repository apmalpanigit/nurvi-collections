import React from "react";

export const ShoppingBagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
    />
  </svg>
);

export const PlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export const MinusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.134H8.09c-1.18 0-2.09.954-2.09 2.134v.916m7.5 0a48.667 48.667 0 00-7.5 0"
    />
  </svg>
);

export const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19.34,4.66A10,10,0,0,0,5.2,18.8L4,20l1.2-1.2A10,10,0,0,0,19.34,4.66ZM12,20.5a8.5,8.5,0,1,1,6-3.05,8.5,8.5,0,0,1-6,3.05ZM15.4,14.3a2.5,2.5,0,0,0-1.5-.9,0.7,0.7,0,0,0-.6.1,3.4,3.4,0,0,0-1,1,0.7,0.7,0,0,1-1,.1,6.5,6.5,0,0,1-2.3-2.3,0.7,0.7,0,0,1,.1-1,3.4,3.4,0,0,0,1-1,0.7,0.7,0,0,0,.1-.6,2.5,2.5,0,0,0-.9-1.5A1.3,1.3,0,0,0,8,7.9a2.1,2.1,0,0,0-1.5,1.5,2.7,2.7,0,0,0,.5,2.3,8.7,8.7,0,0,0,3.7,3.7,2.7,2.7,0,0,0,2.3.5A2.1,2.1,0,0,0,16,15.8,1.3,1.3,0,0,0,15.4,14.3Z" />
  </svg>
);

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75V18A2.25 2.25 0 006.75 20.25H17.25A2.25 2.25 0 0019.5 18V12.75M12 3.75V15.75M12 3.75L8.25 7.5M12 3.75L15.75 7.5"
    />
  </svg>
);
