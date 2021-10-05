export default function Pagination(props) {
    const getPage = () => {
        const outcome = [];
        for (let i = 0; i < props.total; i++) {
            outcome.push(
            <a onClick={props.onChange} 
            className={props.page === ( i + 1) ? 'active' : ''}
            href="#">{(i + 1)}
            </a>
            );
        }
        return outcome
    }


    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Page {props.page} of {props.total}:</span>
                {getPage()}

            </div>
        </div>
    )
}