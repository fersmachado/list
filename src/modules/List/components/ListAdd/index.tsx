
import Typography from "../../../../atomic/atoms/Typography";
import ItemTask from "../../../../atomic/organisms/ItemTask";
import { useTaskContext } from "../../contexts/TaskContext";
import { IItemTask } from "../../interfaces";
import { Container } from "./styled";

interface IListAdd {
}

function ListAdd(params: IListAdd) {
    const { items = [], onEdit, onRemove, onCheck } = useTaskContext();

    return (
        <Container>
            <Typography variant="h1" color="primary/1">
                Precisa pegar
            </Typography>
            {
                items.filter(item => !item.checked).map(item => {
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