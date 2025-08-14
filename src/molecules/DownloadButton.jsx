import Button from '../atoms/Button';
import { ArrowDownToLine } from 'lucide-react';

const DownloadButton = () => {
    return (
        <>
            <Button icon={<ArrowDownToLine />}>쏘카 앱 다운로드</Button>
        </>
    );
};

export default DownloadButton;
