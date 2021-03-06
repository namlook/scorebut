import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import ConfirmButton from './ConfirmButton';
// import '../styles/about-page.css';

/*eslint-disable react/no-set-state */

export class Component extends React.Component {

  constructor(props) {
    super(props);
    this.state = {score: ''};
  }

  addNegativeScore() {
    this.props.onAddScore(this.props.name, -this.state.score);
    this.setState({ score: '' });
  }

  addPositiveScore() {
    this.props.onAddScore(this.props.name, this.state.score);
    this.setState({ score: '' });
  }

  onScoreChanged(event) {
    const score = parseFloat(event.target.value) || 0;
    this.setState({ score });
  }

  render() {
    const props = this.props;

    const scores = <h2>{props.currentScore} <i className="ui small trophy icon" /> {props.totalScore}</h2>;

    const disabled = props.disabled ? 'disabled' : '';
    const className = `ui stackable grid segment ${disabled}`;

    return (
      <div className={className}>
        <div className="three wide column middle aligned">
          <div className="ui grid">
            <div className="height wide middle aligned column">
              <h1>{props.name}</h1>
            </div>
            <div className="height wide right aligned column mobile only">
              {scores}
            </div>
          </div>
        </div>

        <div className="ten wide column middle aligned">
          <div className="ui grid">
            <div className="one column center aligned">
              <div className="ui mini action fluid input">
                <ConfirmButton
                  className="ui red basic button"
                  displayLabel="-"
                  confirmLabel="confirm ?"
                  onConfirm={() => this.addNegativeScore()}
                />
                <input
                  name="score"
                  type="number"
                  pattern="[0-9]*" inputmode="numeric"
                  value={this.state.score}
                  onChange={(e) => this.onScoreChanged(e)}
                />
                <ConfirmButton
                  className="ui green basic button"
                  displayLabel="+"
                  confirmLabel="confirm ?"
                  onConfirm={() => this.addPositiveScore()}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="three wide column right aligned tablet computer only grid">
          {scores}
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  totalScore: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  currentScore: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired,
  onAddScore: PropTypes.func.isRequired
};

export default Component;
