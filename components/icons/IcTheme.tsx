import React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';

const IcTheme: React.FC<SvgProps> = (props) => {
    return (
        <Svg
            width={21}
            height={21}
            viewBox="0 0 21 21"
            fill="none"
            // xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5026 4.58138C10.2985 4.58135 10.1015 4.50642 9.94896 4.37078C9.79643 4.23515 9.69899 4.04826 9.67511 3.84555L9.66927 3.74805V2.91471C9.66951 2.70231 9.75084 2.49802 9.89665 2.34357C10.0425 2.18913 10.2417 2.09618 10.4538 2.08374C10.6658 2.07129 10.8746 2.14028 11.0375 2.2766C11.2003 2.41293 11.305 2.6063 11.3301 2.81721L11.3359 2.91471V3.74805C11.3359 3.96906 11.2481 4.18102 11.0919 4.3373C10.9356 4.49358 10.7236 4.58138 10.5026 4.58138ZM14.6276 6.28971C14.4714 6.13344 14.3836 5.92152 14.3836 5.70055C14.3836 5.47958 14.4714 5.26765 14.6276 5.11138L15.2168 4.52221C15.2936 4.44262 15.3856 4.37914 15.4873 4.33546C15.5889 4.29179 15.6983 4.2688 15.8089 4.26784C15.9196 4.26688 16.0293 4.28796 16.1317 4.32986C16.2341 4.37176 16.3272 4.43364 16.4054 4.51188C16.4837 4.59013 16.5456 4.68317 16.5875 4.78559C16.6294 4.888 16.6504 4.99773 16.6495 5.10838C16.6485 5.21903 16.6255 5.32838 16.5819 5.43005C16.5382 5.53172 16.4747 5.62368 16.3951 5.70055L15.8059 6.28971C15.6497 6.44594 15.4377 6.5337 15.2168 6.5337C14.9958 6.5337 14.7839 6.44594 14.6276 6.28971ZM5.19927 6.28971L4.61011 5.70055C4.45831 5.54338 4.37431 5.33288 4.37621 5.11438C4.37811 4.89588 4.46575 4.68687 4.62026 4.53236C4.77476 4.37786 4.98377 4.29022 5.20227 4.28832C5.42077 4.28642 5.63127 4.37042 5.78844 4.52221L6.3776 5.11138C6.5294 5.26855 6.6134 5.47905 6.6115 5.69755C6.6096 5.91604 6.52196 6.12506 6.36745 6.27956C6.21295 6.43407 6.00394 6.52171 5.78544 6.52361C5.56694 6.52551 5.35644 6.44151 5.19927 6.28971ZM9.98844 18.748C9.58214 18.7481 9.1898 18.5998 8.88518 18.3309C8.58057 18.0621 8.38465 17.6912 8.33427 17.288L8.0176 14.7547C7.06121 14.2069 6.31261 13.3585 5.88819 12.3414C5.46377 11.3242 5.38733 10.1953 5.67074 9.13022C5.95416 8.06513 6.58155 7.12353 7.45537 6.45183C8.32918 5.78012 9.40045 5.41596 10.5026 5.41596C11.6048 5.41596 12.676 5.78013 13.5498 6.45183C14.4237 7.12353 15.0511 8.06513 15.3345 9.13022C15.6179 10.1953 15.5414 11.3242 15.117 12.3414C14.6926 13.3585 13.944 14.2069 12.9876 14.7547L12.6709 17.288C12.6206 17.6912 12.4246 18.0621 12.12 18.3309C11.8154 18.5998 11.4231 18.7481 11.0168 18.748H9.98844ZM10.5026 13.748C11.3867 13.748 12.2345 13.3969 12.8596 12.7717C13.4847 12.1466 13.8359 11.2988 13.8359 10.4147C13.8359 9.53066 13.4847 8.68281 12.8596 8.05769C12.2345 7.43257 11.3867 7.08138 10.5026 7.08138C9.61855 7.08138 8.7707 7.43257 8.14558 8.05769C7.52046 8.68281 7.16927 9.53066 7.16927 10.4147C7.16927 11.2988 7.52046 12.1466 8.14558 12.7717C8.7707 13.3969 9.61855 13.748 10.5026 13.748ZM17.1693 11.248C16.9483 11.248 16.7363 11.1602 16.58 11.004C16.4237 10.8477 16.3359 10.6357 16.3359 10.4147C16.3359 10.1937 16.4237 9.98174 16.58 9.82546C16.7363 9.66918 16.9483 9.58138 17.1693 9.58138H18.0026C18.2236 9.58138 18.4356 9.66918 18.5919 9.82546C18.7481 9.98174 18.8359 10.1937 18.8359 10.4147C18.8359 10.6357 18.7481 10.8477 18.5919 11.004C18.4356 11.1602 18.2236 11.248 18.0026 11.248H17.1693ZM3.00261 11.248C2.78159 11.248 2.56963 11.1602 2.41335 11.004C2.25707 10.8477 2.16927 10.6357 2.16927 10.4147C2.16927 10.1937 2.25707 9.98174 2.41335 9.82546C2.56963 9.66918 2.78159 9.58138 3.00261 9.58138H3.83594C4.05695 9.58138 4.26892 9.66918 4.42519 9.82546C4.58148 9.98174 4.66927 10.1937 4.66927 10.4147C4.66927 10.6357 4.58147 10.8477 4.42519 11.004C4.26891 11.1602 4.05695 11.248 3.83594 11.248H3.00261ZM4.61011 16.3064C4.45388 16.1501 4.36612 15.9382 4.36612 15.7172C4.36612 15.4962 4.45388 15.2843 4.61011 15.128L5.19927 14.5389C5.27614 14.4593 5.3681 14.3958 5.46977 14.3521C5.57144 14.3085 5.68079 14.2855 5.79144 14.2845C5.90209 14.2835 6.01182 14.3046 6.11423 14.3465C6.21665 14.3884 6.30969 14.4503 6.38793 14.5286C6.46618 14.6068 6.52805 14.6998 6.56996 14.8023C6.61186 14.9047 6.63294 15.0144 6.63198 15.125C6.63102 15.2357 6.60803 15.345 6.56436 15.4467C6.52068 15.5484 6.4572 15.6403 6.3776 15.7172L5.78844 16.3064C5.63217 16.4626 5.42024 16.5504 5.19927 16.5504C4.9783 16.5504 4.76638 16.4626 4.61011 16.3064ZM15.2168 16.3064L14.6276 15.7172C14.4796 15.5593 14.3987 15.3501 14.4023 15.1337C14.4058 14.9173 14.4933 14.7107 14.6464 14.5577C14.7995 14.4047 15.0061 14.3173 15.2225 14.314C15.4389 14.3106 15.6482 14.3916 15.8059 14.5397L16.3951 15.1289C16.5432 15.2868 16.624 15.496 16.6205 15.7124C16.6169 15.9288 16.5294 16.1354 16.3763 16.2884C16.2232 16.4414 16.0166 16.5288 15.8002 16.5321C15.5838 16.5355 15.3745 16.4545 15.2168 16.3064ZM9.98844 17.0814H11.0168L11.2251 15.4147H9.7801L9.98844 17.0814Z"
                fill="#5C1C81"
            />
        </Svg>
    );
};

export default IcTheme;