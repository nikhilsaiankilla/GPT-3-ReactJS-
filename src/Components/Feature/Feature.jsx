import './Feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__features__container__feature'>
      <div className="gpt3__features__container__feature__title">
        <div className='gradient__line'></div>
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features__container__feature__text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature