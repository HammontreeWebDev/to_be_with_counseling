import CommonNavBar from "../ui/navbars/common_navbar/CommonNavBar";

export default function Layout({ children }) {
    return (
        <>
            <CommonNavBar />

            <main className={`antialiased`}>
                {children}
            </main>
        </>
    );
}