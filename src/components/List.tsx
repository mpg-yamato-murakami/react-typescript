import React, { useCallback } from 'react';

type Props = {
  items: { name: string }[],
  onClick(name: string): void
}

export const List : React.FC<Props> = (props) => {
  const _handleOnClick = useCallback((name: string) => () => {
    props.onClick(name)
  }, [props])
  const list = props.items.map((item, i) => {
    return (
      <li key={i} onClick={_handleOnClick(item.name)}>{item.name}</li>
    )
  })

  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}