// Por convenção utiliza o nome do componente
// seguido por Props
interface RepositoryItemProps {
    repository: {
        name: string;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props: RepositoryItemProps) {
    return (
        <li>
            <strong>{props.repository?.name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>Acessar repositório</a>
        </li>
    )
}