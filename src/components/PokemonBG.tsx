import { Pokemon } from '../models/index';

const PokemonBG = ({
  pokemon,
  className
}: {
  pokemon: Pokemon;
  className: string;
}) => {
  let classColor = 'bg-white-200';
  let stroke1 = '#8fa4b3';
  let stroke2 = '#bac8d1';
  let stroke3 = '#ebf1f5';
  if (pokemon.color.name === 'green') {
    classColor = 'bg-green-200';
    stroke1 = '#157759';
    stroke2 = '#53ab8b';
    stroke3 = '#82dbb8';
  } else if (pokemon.color.name === 'red') {
    classColor = 'bg-red-200';
    stroke1 = '#a12b2b';
    stroke2 = '#cc4343';
    stroke3 = '#f57a7a';
  } else if (pokemon.color.name === 'yellow') {
    classColor = 'bg-yellow-200';
    stroke1 = '#cfcc1d';
    stroke2 = '#edea45';
    stroke3 = '#f7f69c';
  } else if (pokemon.color.name === 'blue') {
    classColor = 'bg-blue-200';
    stroke1 = '#255eba';
    stroke2 = '#6293e3';
    stroke3 = '#bbd3fa';
  } else if (pokemon.color.name === 'pink') {
    classColor = 'bg-pink-200';
    stroke1 = '#ad2aa7';
    stroke2 = '#e36dde';
    stroke3 = '#f0b4ed';
  } else if (pokemon.color.name === 'black') {
    classColor = 'bg-white-200';
    stroke1 = '#8fa4b3';
    stroke2 = '#bac8d1';
    stroke3 = '#ebf1f5';
  } else if (pokemon.color.name === 'gray') {
    classColor = 'bg-gray-200';
    stroke1 = '#8fa4b3';
    stroke2 = '#c2c8cc';
    stroke3 = '#e8ebed';
  } else if (pokemon.color.name === 'brown') {
    classColor = 'bg-yellow-600';
    stroke1 = '#634325';
    stroke2 = '#9e6a39';
    stroke3 = '#e39c59';
  } else if (pokemon.color.name === 'purple') {
    classColor = 'bg-purple-200';
    stroke1 = '#523882';
    stroke2 = '#775aad';
    stroke3 = '#a888e3';
  }
  return (
    <>
      <svg
        className={`relative ${classColor} ${className}`}
        preserveAspectRatio="xMidYMid"
      >
        <defs>
          <pattern
            id="pid-0.34793511445839975"
            x="0"
            y="0"
            width="197.12"
            height="197.12"
            patternUnits="userSpaceOnUse"
          >
            <g transform="scale(0.77)">
              <g>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="-270.04732244222566"
                  y2="-259.96003981778165"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="318.80916899133183"
                  x2="308.7218863668877"
                  y1="-270.04732244222566"
                  y2="-259.96003981778165"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="574.8091689913318"
                  x2="564.7218863668877"
                  y1="-270.04732244222566"
                  y2="-259.96003981778165"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="-14.047322442225692"
                  y2="-3.9600398177816203"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="318.80916899133183"
                  x2="308.7218863668877"
                  y1="-14.047322442225692"
                  y2="-3.9600398177816203"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="574.8091689913318"
                  x2="564.7218863668877"
                  y1="-14.047322442225692"
                  y2="-3.9600398177816203"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="62.80916899133181"
                  x2="52.72188636688772"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="318.80916899133183"
                  x2="308.7218863668877"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="574.8091689913318"
                  x2="564.7218863668877"
                  y1="241.9526775577743"
                  y2="252.03996018221838"
                  strokeWidth="30"
                  stroke={stroke1}
                  strokeLinecap="round"
                ></line>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-256 256"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="3.7037037037037033s"
                ></animateTransform>
              </g>
              <g>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="-269.70154416572484"
                  y2="-243.72857916897425"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="289.5087586772665"
                  x2="263.53579368051595"
                  y1="-269.70154416572484"
                  y2="-243.72857916897425"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="545.5087586772665"
                  x2="519.5357936805159"
                  y1="-269.70154416572484"
                  y2="-243.72857916897425"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="-13.701544165724812"
                  y2="12.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="289.5087586772665"
                  x2="263.53579368051595"
                  y1="-13.701544165724812"
                  y2="12.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="545.5087586772665"
                  x2="519.5357936805159"
                  y1="-13.701544165724812"
                  y2="12.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="33.508758677266506"
                  x2="7.53579368051593"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="289.5087586772665"
                  x2="263.53579368051595"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="545.5087586772665"
                  x2="519.5357936805159"
                  y1="242.2984558342752"
                  y2="268.27142083102575"
                  strokeWidth="30"
                  stroke={stroke2}
                  strokeLinecap="round"
                ></line>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-256 256"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="1.8518518518518516s"
                ></animateTransform>
              </g>
              <g>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="-289.6483303884458"
                  y2="-258.8883315864926"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="448.22666577535017"
                  x2="417.46666697339697"
                  y1="-289.6483303884458"
                  y2="-258.8883315864926"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="704.2266657753502"
                  x2="673.466666973397"
                  y1="-289.6483303884458"
                  y2="-258.8883315864926"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="-33.6483303884458"
                  y2="-2.8883315864925976"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="448.22666577535017"
                  x2="417.46666697339697"
                  y1="-33.6483303884458"
                  y2="-2.8883315864925976"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="704.2266657753502"
                  x2="673.466666973397"
                  y1="-33.6483303884458"
                  y2="-2.8883315864925976"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="192.22666577535017"
                  x2="161.46666697339697"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="448.22666577535017"
                  x2="417.46666697339697"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <line
                  x1="704.2266657753502"
                  x2="673.466666973397"
                  y1="222.3516696115542"
                  y2="253.1116684135074"
                  strokeWidth="30"
                  stroke={stroke3}
                  strokeLinecap="round"
                ></line>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0 0;-256 256"
                  keyTimes="0;1"
                  repeatCount="indefinite"
                  dur="1.2345679012345678s"
                ></animateTransform>
              </g>
            </g>
          </pattern>
        </defs>
        <rect
          x="0"
          y="0"
          width="1084"
          height="322"
          fill="url(#pid-0.34793511445839975)"
        ></rect>
      </svg>
    </>
  );
};

export default PokemonBG;
