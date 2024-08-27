import React from 'react'
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { ReactComponent as Like } from '../TodoIcon/like.svg'
import { ReactComponent as Dislike} from '../TodoIcon/dislike.svg'
import '../TodoIcon'
function TodoItem({ completado, text, onComplete, onDesable, likes, likesM, likesN}) {
  
  return (
    <li className="TodoItem">

      <CompleteIcon
        completado={completado}
        onComplete={onComplete}
      />

      <p className={`TodoItem-p ${completado && 'TodoItem-p--complete'}`}>
        {text}
      </p>

      <div className='contenedorLike'>
        <span>{likes}</span>
        <div>
          <button onClick={likesM}><Like/></button>
          <button onClick={likesN}><Dislike/></button>
        </div>
      </div>

      <DeleteIcon
        onDesable={onDesable}
      />
    </li>
  )
}

export { TodoItem }