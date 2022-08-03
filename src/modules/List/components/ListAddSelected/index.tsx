import Typography from "../../../../atomic/atoms/Typography";
import ItemTask from "../../../../atomic/organisms/ItemTask";
import {Container} from "./styled";
import {IItemTask} from "../../interfaces";

interface IListSelect {
    items: IItemTask[]
    onEdit: (id: string) => void
    onRemove: (id: string) => void
    onCheck: (id: string) => void
}
function ListAddSelected(params: IListSelect) {
    const { items = [], onEdit, onRemove, onCheck } = params;


    return (
        <Container>
            <Typography variant="h1" color="primary/1">
                Ja ta no carrinho
            </Typography> {
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

export default ListAddSelected;