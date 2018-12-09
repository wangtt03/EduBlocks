import React = require('preact');
import { Component } from 'preact';

interface ImageModalProps {
  title: string;
  visible: boolean;
  options: ImageModalSelection[];

  onCancel(): void;
  onSelect(option: string): void;
}

interface ImageModalState {

}

interface ImageModalSelection {
  title: string;
  image: string;
  help: string;
}

export default class ImageModal extends Component<ImageModalProps, ImageModalState> {
  public render() {
    const getOptions = () => (
      this.props.options.map((option) => (
        <div className="ImageModalOption">
          {option.title}
          <img src={option.image} />
          <div className='ImageModalOptionButtonContainer'>
            <button onClick={() => this.props.onSelect(option.title)}>Select</button>
            <a class='icon-help-circled' style="color:red" href={option.help}></a>
          </div>
        </div>
      ))
    );

    return (
      <div class='modal'>
        <input id='modal_1' type='checkbox' disabled={true} checked={this.props.visible} />
        <label for='modal_1' class='overlay'></label>
        <article>
          <header>
            <h3>{this.props.title}</h3>
          </header>

          <section class='content'>
            <div class="ImageModalOptionContainer">
              {getOptions()}
            </div>
          </section>
          <footer>

          </footer>
        </article>
      </div>
    );
  }
}
