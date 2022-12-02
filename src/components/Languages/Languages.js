import React from 'react'
import './Languages.css'

const Languages = () => {
    const data = [
        {
            title : "Languages",
            contents : ["Python", "JavaScript", "SQL", "NodeJS"]
        },
        {
            title : "software",
            contents : ["Python", "JavaScript", "SQL", "NodeJS"]
        },
        {
            title : "Database",
            contents : ["Python", "JavaScript", "SQL", "NodeJS"]
        }
    ]
  return (
    <section id='languages' >
        {
            data.map(item=>(
                <div className='languages-box' key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                        {
                            item.contents.map(content=>(
                                <li key={content} >{content}</li>
                            ))
                        }
                    </ul>
                </div>
            ))
        }
    </section>
  )
}

export default Languages