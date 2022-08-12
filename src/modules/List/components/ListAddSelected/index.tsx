import Typography from "../../../../atomic/atoms/Typography";
import ItemTask from "../../../../atomic/organisms/ItemTask";
import {Container} from "./styled";
import {IItemTask} from "../../interfaces";
import { useTaskContext } from "../../contexts/TaskContext";

interface IListSelect {
   
}
function ListAddSelected(params: IListSelect) {
    const { items = [], onEdit, onRemove, onCheck } = useTaskContext();

    return (
        <Container>
            <Typography variant="h1" color="primary/1">
                Ja ta no carrinho
            </Typography> {
                items.filter(item => item.checked).map(item => {
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

export default ListAddSelected;