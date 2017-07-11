import React = require('preact');
import { Component } from 'preact';

interface SelectModalProps {
  visible: boolean;
  options: string[];

  onCancel(): void;
  onSelect(file: string): void;
}

interface SelectModalState {

}

export default class SelectModal extends Component<SelectModalProps, SelectModalState> {
  public render() {
    const getFileItems = () => this.props.options.map((file) => (
      <tr>
        <td>{file}</td>
        <td><button onClick={() => this.props.onSelect(file)}>Open</button></td>
      </tr>
    ));

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article>
          <header>
            <h3>File List</h3>
            <a class='close' onClick={this.props.onCancel}>&times;</a>
          </header>
          <section class='content'>
            <table class='primary'>
              <tbody>
                {getFileItems()}
              </tbody>
            </table>
          </section>
          <footer>
            <button onClick={this.props.onCancel}>Close</button>
          </footer>
        </article>
      </div>
    );
  }
}
