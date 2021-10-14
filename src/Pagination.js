export default function Pagination(props) {

    const getPage = () => {
        const result = [];
        for (var i = 0; i < props.total; i++) {
            let pageCurrent = i + 1;
            result.push(
            <a onClick={() => props.onChange(pageCurrent)}className={props.page === pageCurrent ? 'active' : ''}
            >
                {(pageCurrent)}
            </a>
            );
        }
        return result;
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