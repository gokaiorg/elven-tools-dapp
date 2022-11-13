import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const ImgLogoMaiar = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 50 50"
      version="1.1"
    >
      <defs>
        <linearGradient
          x1="25.0645079%"
          y1="50%"
          x2="50%"
          y2="62.4803998%"
          id="linearGradient-1"
        >
          <stop stopColor="#1A45C2" offset="0%" />
          <stop stopColor="#001F9C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="62.4834284%"
          x2="74.9247439%"
          y2="50%"
          id="linearGradient-2"
        >
          <stop stopColor="#001F9C" offset="0%" />
          <stop stopColor="#1A45C2" offset="100%" />
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <polygon
          fill="url(#linearGradient-1)"
          transform="translate(12.490196, 25.000000) scale(1, -1) rotate(-90.000000) translate(-12.490196, -25.000000) "
          points="37.4901961 12.5098039 24.9484286 25.0798153 12.5228895 37.4901961 -12.5098039 12.5098039"
        />
        <polygon
          fill="url(#linearGradient-2)"
          transform="translate(43.714929, 37.500000) scale(-1, -1) rotate(-90.000000) translate(-43.714929, -37.500000) "
          points="56.2149286 31.2541443 43.7149286 43.7458557 31.2149286 31.2541443"
        />
        <polygon
          fill="#1A45C2"
          transform="translate(31.229002, 25.000000) scale(-1, -1) rotate(-90.000000) translate(-31.229002, -25.000000) "
          points="56.229002 31.2486099 43.729002 43.7317822 6.22900203 6.2682178 31.229002 6.2682178"
        />
      </g>
    </svg>
  );
};