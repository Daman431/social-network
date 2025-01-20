import Header from "@/components/Header/Header"
import Layout from "@/components/Layout/Layout"
import { ReactNode } from "react"

interface HomeLayoutProps {
    children: ReactNode | ReactNode[]
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
    return <Layout>
        <Header />
        {children}
    </Layout>
}

export default HomeLayout;