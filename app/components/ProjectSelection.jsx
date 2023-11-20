import React from 'react'

const ProjectSelection = ({name,onClick,active}) => {

    const Tagstyles = active ? ' border-4 border-purple-500 text-white' : ' border-2 border-slate-600 text-slate-600'

  return (
    <button onClick={() => onClick(name)} className={Tagstyles + '  rounded-full px-4 py-2'}>
        {name || 'All'}
    </button>
  )
}

export default ProjectSelection