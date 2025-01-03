export const generateMetadata = () => {
    return {
        title: 'About'
    }
}

export default function Layout({ children }) {
    return (
                <>
                {children}
                </>
    );
}