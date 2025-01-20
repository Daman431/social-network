import Layout from "@/components/Layout/Layout"
import { ReactNode } from "react"

interface HomeLayoutProps {
    children: ReactNode | ReactNode[]
}
const HomeLayout = ({ children }: HomeLayoutProps) => {
    return <Layout>
        {children}
    </Layout>
}

export default HomeLayout;