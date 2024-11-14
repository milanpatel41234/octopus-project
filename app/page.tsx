import Footer from "@/app/components/Footer";
import MainContent from "@/app/components/MainContent";

export default function Home() {
    return (
        <div className="grid  items-center justify-items-center pb-20 gap-16  font-[family-name:var(--font-geist-sans)]">
            <MainContent/>
           <Footer/>
        </div>
    );
}
