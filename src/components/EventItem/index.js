// Write your code here
import './index.css'

const EventItem = props => {
  const {eventList, selectStatus, isTrue} = props
  const {id, imageUrl, name, location, registrationStatus} = eventList
  const onClickBtn = () => {
    console.log('click')
    console.log(registrationStatus)
    selectStatus(id)
  }
  const className = isTrue ? 'border-col' : ''
  return (
    <li className={`list-con ${className}`}>
      <button type="button" className="btn" onClick={onClickBtn}>
        <img src={imageUrl} alt="event" className="img" />
      </button>
      <p className="p1">{name}</p>
      <p className="p2">{location}</p>
    </li>
  )
}
export default EventItem
