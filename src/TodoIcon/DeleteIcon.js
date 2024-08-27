import React from "react";
import { TodoIcon } from ".";

function DeleteIcon ({onDesable}) {
    return (
        <TodoIcon 
            type='delete'
            color={'gray'}
            onClick={onDesable}
        />
    )
}

export { DeleteIcon }