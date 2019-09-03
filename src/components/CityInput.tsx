import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';

type Props = {
  onSubmit(name: string): void
}

export const CityInput: React.FC<Props> = (props) => {
  const [ city, setCity ] = useState<string>('')
  const _handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
  }, [props])
  const _handleOnSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (city.length === 0) {
      alert('都市名を入力してください。')
      return;
    }
    props.onSubmit(city)
  }, [city])
  return (
    <form onSubmit={_handleOnSubmit}>
      <input type="text" placeholder="都市名" onChange={_handleOnChange} />
      <button type="submit">追加</button>
    </form>
  )
}