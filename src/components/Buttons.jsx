export default function Buttons({ title, onClick}) {
     return (
        
            <button
                className="btn"
                onClick={onClick}
            >
                {title}
            </button>
        
    );
}