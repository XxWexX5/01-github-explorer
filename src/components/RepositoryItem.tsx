type RepositoryItemProps = {
    repository: {
        name: string;
        description: string;
        html_url: string
    }
}

function RepositoryItem( props: RepositoryItemProps ) {
    return(
        <li className="item">
            <strong className="subtitle">{ props.repository?.name ?? 'Default' }</strong>

            <p className="text">{ props.repository?.description ?? 'Default' }</p>

            <a className="link" target="_blank" href={ props.repository?.html_url ?? 'Default' }>Acessar repositório</a>
        </li>
    );
}

export default RepositoryItem;