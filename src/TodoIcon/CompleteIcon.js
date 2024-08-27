import React from "react";
import { TodoIcon } from ".";

function CompleteIcon ( {completado, onComplete}) {

    return (
        <TodoIcon 
            type='check'
            color={completado ? 'green' : 'gray'}
            onClick={onComplete}
        />
    )
}

export { CompleteIcon }