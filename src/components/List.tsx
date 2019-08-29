import React from 'react';

type Props = {
  items: { name: string }[]
}

export const List : React.FC<Props> = (props) => {
  const list = props.items.map((item, i) => {
    return (
      <li key={i}>{item.name}</li>
    )
  })

  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}