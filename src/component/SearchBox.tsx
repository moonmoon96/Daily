interface SearchBoxProps {
    className?: string;
    value: string;
    maxLength: number;
    placeholder: string;
    autoComplete: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onEnter?: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ className, value, maxLength, placeholder, autoComplete, onChange, onEnter }) => {
    
    const searchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && onEnter) {
            e.preventDefault();
            onEnter();
        }
    };
    
    return(
        <input 
            className={className}
            value={value}
            maxLength={maxLength}
            placeholder={placeholder}
            autoComplete={autoComplete}
            onChange={onChange}
            onKeyDown={searchEnter}
        />
    )
}

export default SearchBox;