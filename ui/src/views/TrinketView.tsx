import React = require('preact');
import { Component } from 'preact';

interface Props {
  visible: boolean;
  pythonCode: string;

  onClose(): void;
}

export default class TrinketView extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  public componentDidMount() {

  }

  public componentDidUpdate() {

  }

  private getEscapedCode() {
    return encodeURI(this.props.pythonCode);
  }

  public render() {
    return (
      <div class='TrinketView' style={{ display: this.props.visible ? 'block' : 'none' }} id='terminal-dialog'>
        <div class='terminal-help'>
          <span class='help-item' onClick={() => { }}>
            <span class='key'>ESC</span> = Close terminal
          </span>
          <span class='help-item' onClick={() => { }}>
            <span class='key'>Ctrl</span> + <span class='key'>C</span> = Stop program
          </span>
        </div>

        <div class='TrinketView__Container'>
          <div class='TrinketView__ContainerLoading' />

          {this.props.visible &&
            <iframe
              frameBorder={0}
              src={`https://trinket.io/tools/1.0/jekyll/embed/python?runOption=run&outputOnly=true&start=result#code=${this.getEscapedCode()}`}
            />
          }
        </div>

      </div>
    );
  }
}
