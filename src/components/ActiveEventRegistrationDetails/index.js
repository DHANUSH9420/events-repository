// Write your code here
import './index.css'

const eventDisplayTheValue = {
  noActiveEventView: 'No_Active_Event_View',
  yetToRegisterView: 'YET_TO_REGISTER',
  registeredView: 'REGISTERED',
  registrationsClosedView: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {activeEventRegisterStatus} = props

  const renderYetToRegister = () => (
    <div className="display-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="img-1"
      />
      <p className="pp">
        A Line Performance brings so much to much to yuor relationship with
        dance.Seeing dance Live can oftern make you fail totally in love with
        this beautiful art form.
      </p>
      <button type="button" className="button-1">
        Register Here
      </button>
    </div>
  )

  const renderRegisterView = () => (
    <div className="display-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="img-2"
      />
      <p className="img-2-text">You have already registered for the event</p>
    </div>
  )

  const renderRegisterClosed = () => (
    <div className="display-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img-3"
      />
      <p className="img-3-text">Registered Are Closed Now!</p>
      <p className="comman-text">
        Stay turned, We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderNoActiveEventView = () => (
    <div className="display-2">
      <p className="comman-text">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderActiveValues = () => {
    switch (activeEventRegisterStatus) {
      case eventDisplayTheValue.yetToRegisterView:
        return renderYetToRegister()
      case eventDisplayTheValue.registeredView:
        return renderRegisterView()
      case eventDisplayTheValue.registrationsClosedView:
        return renderRegisterClosed()
      default:
        return renderNoActiveEventView()
    }
  }

  return <div className="register-this-values">{renderActiveValues()}</div>
}
export default ActiveEventRegistrationDetails
