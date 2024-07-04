import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Demon Slayer']);

    const onAddCategory = ( newCategory ) => {
        if ( categories.includes( newCategory ) ) return;

        setCategories( [ newCategory, ...categories ]);
        // setCategories( cat => [ ...cat, newCategory ]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            // onAddCategory = { setCategories }
            onNewCategory = { onAddCategory }
        />

        { 
            categories.map( ( category ) => ( 
                <GifGrid key = { category } category = { category } />
            )) 
        }
    </>
  )
}
