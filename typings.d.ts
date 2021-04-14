declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare type UAResults = {
  android: boolean;
  ios: boolean;
  mobile: boolean;
  tablet: boolean;
  windows: boolean;
  mac: boolean;
  linux: boolean;
  computer: boolean;
  firefox: boolean;
  chrome: boolean;
  edge: boolean;
  safari: boolean;
};