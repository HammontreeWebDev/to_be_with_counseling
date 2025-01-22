export const generateMetadata = () => {
    return {
        title: 'About',
        keywords: "Karah, Hammontree, Counseling, To Be With, Mental Health, Lifestyle, Therapy, Florida",
        description: "Discover who Karah Hammontree is and the motivation behind To Be With Counseling.",
    }
}

export default function Layout({ children }) {
    return (
        <>
            {children}
        </>
    );
}