import { useEffect } from "react";

interface Props{
    url: string;
}
export const AutoLinkOpener: React.FC<Props> = ({ url }) => {
    useEffect(() => {
        window.open(url, '_blank');
    }, [url]);

    return null; 
};