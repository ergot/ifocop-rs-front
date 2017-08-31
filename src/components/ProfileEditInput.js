import React from 'react';


class ProfileEditInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.props.updateStateParent(this.props.id, this.state.value);
    });
  }

  render() {
    return (

      <div className="form-group">
        <label htmlFor="definpu" className="col-sm-3 control-label">{this.props.label}</label>
        <div className="col-sm-4">
          <input
            type="text"
            id={this.props.id}
            name={this.props.id}
            className="form-control"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </div>

    );
  }
}
ProfileEditInput.defaultProps = {
  label: 'To Define',
};

export default ProfileEditInput;
