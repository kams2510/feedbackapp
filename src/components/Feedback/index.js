// Write your React code here.
import './index.css'
import {Component} from 'react'
import EmojiMaker from '../EmojiMaker'

class Feedback extends Component {
  feedbackBtn = () => {
    const {resources} = this.props
    console.log(resources)
  }

  render() {
    const {resources} = this.props

    return (
      <div className="top-card-bg">
        <div className="card">
          <h1 onClick={this.feedbackBtn}>
            How satisfy with your are our customer support performance
          </h1>
          <ul>
            {resources.map(each => (
              <EmojiMaker resources={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
