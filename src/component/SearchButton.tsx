interface SearchButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const SearchButton: React.FC<SearchButtonProps> = ({ onClick, children, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    )
}

export default SearchButton;