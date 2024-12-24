import Navbar from "@/components/navbar";

export default function authLayout({children}){
    return(
        <div>
            <Navbar />
            {children}
        </div>
    )
}