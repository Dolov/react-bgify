import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
}

const GridBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      {children}
    </div>
  );
};

const RadialGradientBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
      {children}
    </div>
  );
};

const BlueRadialBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      {children}
    </div>
  );
};

const BlurredCircleBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-full w-full bg-white">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      {children}
    </div>
  );
};

const EllipseGradientBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {children}
    </div>
  );
};

const FullRadialBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      {children}
    </div>
  );
};

const GridWithBlurredCircleBackground: React.FC<BackgroundProps> = ({
  children,
}) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      {children}
    </div>
  );
};

const GridWithRadialGradientBackground: React.FC<BackgroundProps> = ({
  children,
}) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      {children}
    </div>
  );
};

const DottedBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      {children}
    </div>
  );
};

const MaskedDottedBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      {children}
    </div>
  );
};

const SimpleGridBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {children}
    </div>
  );
};

const LightGridBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      {children}
    </div>
  );
};

const MaskedGridBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      {children}
    </div>
  );
};

const DarkRadialBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      {children}
    </div>
  );
};

const DarkEllipseBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      {children}
    </div>
  );
};

const DarkBlurredBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      {children}
    </div>
  );
};

const DarkRadialCircleBackground: React.FC<BackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
      {children}
    </div>
  );
};

const DarkDoubleCircleBackground: React.FC<BackgroundProps> = ({
  children,
}) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      {children}
    </div>
  );
};

const DarkComplexBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-black">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
      {children}
    </div>
  );
};

const DarkDottedBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="absolute top-0 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      {children}
    </div>
  );
};

const DarkGridBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      {children}
    </div>
  );
};

const DarkMaskedGridBackground: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="relative h-full w-full bg-slate-950">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {children}
    </div>
  );
};

export const backgroundMap = {
  grid: GridBackground,
  radialGradient: RadialGradientBackground,
  blueRadial: BlueRadialBackground,
  blurredCircle: BlurredCircleBackground,
  ellipseGradient: EllipseGradientBackground,
  fullRadial: FullRadialBackground,
  gridWithBlurredCircle: GridWithBlurredCircleBackground,
  gridWithRadialGradient: GridWithRadialGradientBackground,
  dotted: DottedBackground,
  maskedDotted: MaskedDottedBackground,
  simpleGrid: SimpleGridBackground,
  lightGrid: LightGridBackground,
  maskedGrid: MaskedGridBackground,
  darkRadial: DarkRadialBackground,
  darkEllipse: DarkEllipseBackground,
  darkBlurred: DarkBlurredBackground,
  darkRadialCircle: DarkRadialCircleBackground,
  darkDoubleCircle: DarkDoubleCircleBackground,
  darkComplex: DarkComplexBackground,
  darkDotted: DarkDottedBackground,
  darkGrid: DarkGridBackground,
  darkMaskedGrid: DarkMaskedGridBackground,
};

const Background: React.FC<BackgroundProps> = ({
  children,
  className,
  contentClassName,
}) => {
  return (
    <GridBackground>
      <div className={`h-full relative ${className || ''}`}>
        <div className={`overflow-auto ${contentClassName || ''}`}>
          {children}
        </div>
      </div>
    </GridBackground>
  );
};

export default Background;
