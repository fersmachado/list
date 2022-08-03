
import Typography from "../../../../atomic/atoms/Typography";
import ItemTask from "../../../../atomic/organisms/ItemTask";
import { IItemTask } from "../../interfaces";
import { Container } from "./styled";

interface IListAdd {
    items: IItemTask[]
    onEdit: (id: string) => void
    onRemove: (id: string) => void
    onCheck: (id: string) => void
}

function ListAdd(params: IListAdd) {
    const { items = [], onEdit, onRemove, onCheck } = params;

    return (
        <Container>
            <Typography variant="h1" color="primary/1">
                Precisa pegar
            </Typography>
            {
                items.map(item => {
                    return (
                        <ItemTask
                            key={item.id}
                            item={item}
                            onEdit={onEdit}
                            onRemove={onRemove}
                            onCheck={onCheck}
                        />
                    )
                })
            }
        </Container>
    )
}

export default ListAdd;