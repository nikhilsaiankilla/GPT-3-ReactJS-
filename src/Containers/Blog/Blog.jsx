import { Article } from '../../Components'
import './Blog.css'
import {blog01,blog02,blog03,blog04,blog05} from '../Blog/import'
const Blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog__heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog__container">
        <div className="gpt3__blog__container__groupA">
          <Article imgURL={blog01}  date='oct 25 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className="gpt3__blog__container__groupB">
        <Article imgURL={blog05} date='oct 25 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Article imgURL={blog02} date='oct 25 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Article imgURL={blog03} date='oct 25 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        <Article imgURL={blog04} date='oct 25 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog