import './index.css'

const EmojiMaker = props => {
  const {resources} = props
  const {imageUrl, name} = resources
  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default EmojiMaker
