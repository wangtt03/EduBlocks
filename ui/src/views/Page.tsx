import React = require('preact');
import { Component } from 'preact';
import { getPlatform, getPlatformList } from '../platforms';
import { App, Extension, PlatformInterface, PlatformSelection, Capability } from '../types';
import BlocklyView from './BlocklyView';
import ImageModal from './ImageModal';
import Nav from './Nav';
import PythonView from './PythonView';
import SelectModal from './SelectModal';
import TerminalView from './TerminalView';

const ViewModeBlockly = 'blocks';
const ViewModePython = 'python';

type ViewMode = typeof ViewModeBlockly | typeof ViewModePython;

interface Props {
  app: App;
}

interface DocumentState {
  xml: string | null;
  python: string | null;
  pythonClean: boolean;
}

interface State {
  platform?: PlatformInterface;

  viewMode: ViewMode;

  platformSelectOpen: boolean;
  terminalOpen: boolean;
  samplesOpen: boolean;
  themesOpen: boolean;
  extensionsOpen: boolean;

  extensionsActive: Extension[];

  doc: Readonly<DocumentState>;
}

export default class Page extends Component<Props, State> {
  public terminalView?: TerminalView;

  constructor() {
    super();

    this.state = {
      viewMode: ViewModeBlockly,

      terminalOpen: false,
      samplesOpen: false,
      themesOpen: false,
      extensionsOpen: false,
      platformSelectOpen: true,

      extensionsActive: [],

      doc: {
        xml: null,
        python: null,
        pythonClean: true,
      },
    };
  }

  private readBlocklyContents(xml: string) {
    if (this.state.doc.xml === xml) { return; }

    const doc: DocumentState = {
      xml,
      python: null,
      pythonClean: true,
    };

    this.setState({ doc });

    this.switchView(ViewModeBlockly);
  }

  private updateFromBlockly(xml: string, python: string) {
    if (
      this.state.doc.xml === xml &&
      this.state.doc.python === python
    ) {
      return;
    }

    if (this.state.doc.python !== python && !this.state.doc.pythonClean) {
      alert('Python changes have been overwritten!');
    }

    const doc: DocumentState = {
      xml,
      python,
      pythonClean: true,
    };

    this.setState({ doc });
  }

  private updateFromPython(python: string) {
    if (this.state.doc.python === python) { return; }

    const doc: DocumentState = {
      xml: this.state.doc.xml,
      python,
      pythonClean: false,
    };

    this.setState({ doc });
  }

  private new() {
    const doc: DocumentState = {
      xml: null,
      python: null,
      pythonClean: true,
    };

    this.setState({ doc });

    this.switchView('blocks');
  }

  public componentDidMount() {

  }

  private toggleView(): 0 {
    switch (this.state.viewMode) {
      case ViewModeBlockly:
        return this.switchView(ViewModePython);

      case ViewModePython:
        return this.switchView(ViewModeBlockly);
    }
  }

  private switchView(viewMode: ViewMode): 0 {
    switch (viewMode) {
      case ViewModeBlockly:
        this.setState({ viewMode: 'blocks' });

        return 0;

      case ViewModePython:
        this.setState({ viewMode: 'python' });

        return 0;
    }
  }

  private sendCode() {
    if (!this.terminalView) { throw new Error('No terminal'); }

    if (!this.state.doc.python) {
      alert('There is no code to run');

      return;
    }

    this.setState({ terminalOpen: true });
    this.terminalView.focus();
    this.terminalView.reset();

    this.props.app.runCode(this.state.doc.python);

    setTimeout(() => this.terminalView!.focus(), 250);
  }

  private onBlocklyChange(xml: string, python: string) {
    this.updateFromBlockly(xml, python);
  }

  private onPythonChange(python: string) {
    this.updateFromPython(python);
  }

  private async openFile() {
    const xml = await this.props.app.openFile();

    this.readBlocklyContents(xml);
  }

  private async saveFile() {
    const xml = this.state.doc.xml;

    if (xml) {
      await this.props.app.saveFile(xml, 'xml', 'text/xml;charset=utf-8');
    }
  }

  private async downloadPython() {
    const python = this.state.doc.python;

    if (python) {
      await this.props.app.exportPython(python, this.state.extensionsActive);
    }
  }

  private async downloadHex() {
    const python = this.state.doc.python;

    if (python) {
      await this.props.app.saveHex(python, this.state.extensionsActive);
    }
  }


  private async selectPlatform(selection: PlatformSelection) {
    const platform = await getPlatform(selection.platform);

    this.setState({ platformSelectOpen: false, platform });
  }


  private openSamples() {
    this.setState({ samplesOpen: true });
  }

  private closeSamples() {
    this.setState({ samplesOpen: false });
  }

  private selectSample(file: string) {
    this.closeSamples();

    const xml = this.props.app.getSample(file);

    this.readBlocklyContents(xml);
  }


  private openThemes() {
    this.setState({ themesOpen: true });
  }

  private closeThemes() {
    this.setState({ themesOpen: false });
  }

  private selectTheme(theme: string) {
    this.closeThemes();

    document.body.className = `theme-${theme}`;
  }


  private openExtensions() {
    this.setState({ extensionsOpen: true });
  }

  private closeExtensions() {
    this.setState({ extensionsOpen: false });
  }

  private selectExtension(extension: Extension) {
    this.closeExtensions();

    const { extensionsActive } = this.state;

    this.setState({
      extensionsActive: [...extensionsActive, extension],
    });
  }


  private onTerminalClose() {
    this.setState({ terminalOpen: false });
  }


  private hasCapability(capability: Capability) {
    if (!this.state.platform) return false;

    return this.state.platform.capabilities.indexOf(capability) !== -1;
  }

  private getExtensions() {
    if (!this.state.platform) return [];

    return this.state.platform.extentions;
  }


  private initTerminal(terminalView: TerminalView) {
    if (this.terminalView !== terminalView) {
      this.terminalView = terminalView;

      this.props.app.assignTerminal(terminalView);
    }
  }


  public render() {
    const availablePlatforms = getPlatformList();

    return (
      <div id='page'>
        <ImageModal
          title='Select your mode'
          options={availablePlatforms}
          visible={this.state.platformSelectOpen}
          onSelect={(platform) => this.selectPlatform(platform)}
          onCancel={() => { }}
        />

        <Nav
          platformImg={this.state.platform && this.state.platform.image}
          sync={this.state.doc.pythonClean}

          sendCode={this.hasCapability('RemoteShell') ? () => this.sendCode() : undefined}
          downloadPython={() => this.downloadPython()}
          downloadHex={this.hasCapability('HexDownload') ? () => this.downloadHex() : undefined}
          openCode={() => this.openFile()}
          saveCode={() => this.saveFile()}
          newCode={() => this.new()}
          openSamples={() => this.openSamples()}
          openExtensions={this.getExtensions().length ? () => this.openExtensions() : undefined}
          openThemes={() => this.openThemes()}
        />

        <section id='workspace'>
          <button
            id='toggleViewButton'
            onClick={() => this.toggleView()}
          >

            {this.state.viewMode}

          </button>

          <BlocklyView
            visible={this.state.viewMode === 'blocks'}
            xml={this.state.doc.xml}
            extensionsActive={this.state.extensionsActive}
            onChange={(xml, python) => this.onBlocklyChange(xml, python)}
          />

          <PythonView
            visible={this.state.viewMode === 'python'}
            python={this.state.doc.python}
            onChange={(python) => this.onPythonChange(python)}
          />
        </section>

        {this.hasCapability('RemoteShell') &&
          <TerminalView
            ref={(c) => this.initTerminal(c)}
            visible={this.state.terminalOpen}
            onClose={() => this.onTerminalClose()}
          />
        }

        <SelectModal
          title='Samples'
          options={this.props.app.getSamples()}
          visible={this.state.samplesOpen}
          onSelect={(file) => this.selectSample(file)}
          onCancel={() => this.closeSamples()}
        />

        <SelectModal
          title='Themes'
          options={this.props.app.getThemes()}
          visible={this.state.themesOpen}
          onSelect={(theme) => this.selectTheme(theme)}
          onCancel={() => this.closeThemes()}
        />

        {this.getExtensions().length &&
          <SelectModal
            title='Extensions'
            options={this.getExtensions()}
            visible={this.state.extensionsOpen}
            onSelect={(extension) => this.selectExtension(extension as Extension)}
            onCancel={() => this.closeExtensions()}
          />
        }
      </div>
    );
  }
}
