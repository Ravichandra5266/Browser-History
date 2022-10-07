import './index.css'

const BrowserHistoryItem = props => {
  const {eachItemDetails, onDeleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachItemDetails
  const onDelete = () => {
    onDeleteItem(id)
  }
  return (
    <li className="li-card">
      <p className="time">{timeAccessed}</p>
      <div className="image-container">
        <img src={logoUrl} alt="domain logo" />
      </div>
      <div className="card-content-container">
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button className="btn" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserHistoryItem
