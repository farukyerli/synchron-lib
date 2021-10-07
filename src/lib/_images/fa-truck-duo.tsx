import React from "react";

export default (props: any) => (
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path opacity="0.4" d="M15.625 31.25C14.5949 31.25 13.5879 31.5555 12.7314 32.1278C11.8749 32.7001 11.2073 33.5135 10.8131 34.4652C10.4189 35.4169 10.3157 36.4641 10.5167 37.4744C10.7177 38.4847 11.2137 39.4128 11.9421 40.1412C12.6705 40.8696 13.5986 41.3656 14.6089 41.5666C15.6192 41.7675 16.6664 41.6644 17.6181 41.2702C18.5698 40.876 19.3832 40.2084 19.9555 39.3519C20.5278 38.4954 20.8333 37.4884 20.8333 36.4583C20.8333 35.077 20.2846 33.7522 19.3078 32.7755C18.3311 31.7987 17.0063 31.25 15.625 31.25ZM34.375 31.25C33.3449 31.25 32.3379 31.5555 31.4814 32.1278C30.6249 32.7001 29.9573 33.5135 29.5631 34.4652C29.1689 35.4169 29.0658 36.4641 29.2667 37.4744C29.4677 38.4847 29.9637 39.4128 30.6921 40.1412C31.4205 40.8696 32.3486 41.3656 33.3589 41.5666C34.3692 41.7675 35.4164 41.6644 36.3681 41.2702C37.3198 40.876 38.1333 40.2084 38.7056 39.3519C39.2779 38.4954 39.5833 37.4884 39.5833 36.4583C39.5833 35.077 39.0346 33.7522 38.0578 32.7755C37.0811 31.7987 35.7563 31.25 34.375 31.25Z" fill={props.color || '#959595'} />
        <path d="M44.7916 31.25H43.75V24.2122C43.7485 23.384 43.4184 22.5901 42.832 22.0052L36.3281 15.5013C35.7431 14.9149 34.9493 14.5847 34.1211 14.5833H31.25V11.4583C31.25 10.6295 30.9207 9.83466 30.3347 9.2486C29.7486 8.66255 28.9538 8.33331 28.125 8.33331H7.29163C6.46282 8.33331 5.66797 8.66255 5.08192 9.2486C4.49587 9.83466 4.16663 10.6295 4.16663 11.4583V32.2916C4.16663 33.1204 4.49587 33.9153 5.08192 34.5014C5.66797 35.0874 6.46282 35.4166 7.29163 35.4166H8.47392C8.98433 31.8965 11.9648 29.1666 15.625 29.1666C19.2851 29.1666 22.3007 31.8919 22.8112 35.4166H27.1888C27.6998 31.8919 30.7109 29.1666 34.375 29.1666C38.039 29.1666 41.0156 31.8965 41.526 35.4166H44.7916C45.0679 35.4166 45.3328 35.3069 45.5282 35.1115C45.7235 34.9162 45.8333 34.6512 45.8333 34.375V32.2916C45.8333 32.0154 45.7235 31.7504 45.5282 31.5551C45.3328 31.3597 45.0679 31.25 44.7916 31.25ZM40.625 25H31.25V17.7083H34.1211L40.625 24.2122V25Z" fill={props.color || '#959595'} />
    </svg>)
