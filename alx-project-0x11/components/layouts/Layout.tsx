import { ReactComponentProps } from "@/interfaces";
import Footer from "./Footer"
import Header from "./Header"

const Layout: React.FC<ReactComponentProps> = ({
    children 
}) => {
    return (
        <>
        <Header />
        <main className="min-h-screen">

        </main>
        <Footer />
        
        </>
    )
}

export default Layout;