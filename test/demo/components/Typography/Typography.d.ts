declare type headlines = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
declare type p = 'body1' | 'body2';
export interface TypographyProps {
    type: headlines | p;
    children: string;
}
declare const Typography: (props: TypographyProps) => import("react").FunctionComponentElement<{
    children: string;
    type: headlines;
}>;
export default Typography;
