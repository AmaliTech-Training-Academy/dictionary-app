import React, {useEffect} from 'react';

const EmptyText:React.FC= () => {

  useEffect(() => {
    const loader = document.querySelector('.loader') as HTMLElement;
    loader.style.display = 'none';
  });

  return (
    <div className='validate'>Whoops, can't be empty...</div>
  )
}

export default EmptyText