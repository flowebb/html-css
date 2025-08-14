import DownloadButton from './molecules/DownloadButton';
import Header from './organisms/Header';
import HeroSection from './organisms/Herosection';
import SharingSection from './organisms/SharingSection';
import ServiceSection from './organisms/ServiceSection';

function App() {
    return (
        <>
            <Header></Header>
            <DownloadButton></DownloadButton>
            <HeroSection></HeroSection>
            <SharingSection></SharingSection>
            <ServiceSection></ServiceSection>
        </>
    );
}

export default App;
