import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import Checkbox from "../../../../atomic/atoms/Checkbox";
import Typography from "../../../../atomic/atoms/Typography";
import ItemTask from "../../../../atomic/organisms/ItemTask";
import { Container } from "./styled";

interface IListAdd {
    
}

function ListAdd(params: IListAdd) {
    const {} = params;

    return (
        <Container>
            <Typography variant="h1" color="primary/1">
                Precisa pegar
            </Typography>
            {
                itens.maps(item => {
                    return (
                        <ItemTask 
                            value={item.value}
                        />   
                    )
                })
                
                
                         
            }

            

        </Container>
    )
}

export default ListAdd;