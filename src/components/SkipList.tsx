import React from 'react'
import { useSkipContext } from '../contex/SkipContext'
import SkipCard from './SkipCard'


const SkipList = () => {
  const {filteredSkips, selectedSkip} = useSkipContext()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-54">
        {filteredSkips.map(skip => <SkipCard key={skip.id} skip={skip} isSelected={selectedSkip?.id === skip.id}/>)}
    </div>
  )
}

export default SkipList