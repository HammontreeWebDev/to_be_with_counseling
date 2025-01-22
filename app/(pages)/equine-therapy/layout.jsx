export const generateMetadata = () => {
    return {
        title: 'Equine Therapy',
        keywords: "Karah, Hammontree, Counseling, To Be With, Mental Health, Lifestyle, Therapy, Florida, Equine, Equine Therapy",
        description: "Learn about how Equine Therapy can help you heal.",
    }
}

export default function Layout({ children }) {
    return (
        <>
            {children}
        </>
    );
}