import './Header.css'
import './../../App.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const  Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header__content">
        <h1 className='gradient__text'>
          lets build some thing amazing with GPT-3 openAI
        </h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="gpt3__header__content__input">
          <input type='email' placeholder='your email address'/>
          <button type='button'>get started</button>
        </div>
        <div className="gpt3__header__content__people">
          <img src={people} alt="" /> <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header__image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header