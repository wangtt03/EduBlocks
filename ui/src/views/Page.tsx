import React = require('preact');
import { Component } from 'preact';
import { getPlatform, getPlatformList } from '../platforms';
import { App, Capability, Extension, PlatformInterface, PlatformSelection } from '../types';
import BlocklyView from './BlocklyView';
import ImageModal from './ImageModal';
import Nav from './Nav';
import PythonView from './PythonView';
import RemoteShellView from './RemoteShellView';
import SelectModal, { SelectModalOption } from './SelectModal';
import TrinketView from './TrinketView';

type AdvancedFunction = 'Export';
const AdvancedFunctions: AdvancedFunction[] = ['Export'];

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
  modal: null | 'platform' | 'terminal' | 'samples' | 'themes' | 'extensions' | 'functions';
  extensionsActive: Extension[];
  doc: Readonly<DocumentState>;
}

export default class Page extends Component<Props, State> {
  public remoteShellView?: RemoteShellView;

  constructor() {
    super();

    this.state = {
      viewMode: ViewModeBlockly,
      modal: 'platform',
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

  private openTerminal() {
    if (!this.state.doc.python) {
      alert('There is no code to run');

      return;
    }

    this.setState({ modal: 'terminal' });

    if (this.remoteShellView) {
      this.remoteShellView.focus();
      this.remoteShellView.reset();

      this.props.app.runCode(this.state.doc.python);

      setTimeout(() => this.remoteShellView!.focus(), 250);
    }
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

    if (selection.platform === 'RaspberryPi') {
      alert(navigator.platform)
      if (navigator.platform == 'Linux armv7l'){
        try {
               await this.props.app.initConnection('localhost');
             } catch (err) {
               console.error(err);
               alert(err.mesage);
             }
            }
      else{
        alert("Not a Pi")
      }
     // let ip: string | null = null;
      
      // if (navigator.platform == 'Linux armv7l'){
      //   if (window.location.protocol === 'https:') {
      //     alert('Need to switch to HTTP...');
      //     window.location.protocol = 'http:';
      //     return;
      //   }
      //   console.log(navigator.platform)
      //   await this.props.app.initConnection('localhost');
      // }

      // else{
      //   ip = prompt('Please enter your Raspberry Pi\'s IP address');

      //   if (!ip) return;

      //   try {
      //     await this.props.app.initConnection(ip);
      //   } catch (err) {
      //     console.error(err);
      //     alert(err.mesage);
      //   }

     // }

    }

    this.setState({
      platform,
      modal: null,
      extensionsActive: platform.defaultExtensions,
    });
  }


  private closeModal() {
    this.setState({ modal: null });
  }


  private openSamples() {
    this.setState({ modal: 'samples' });
  }

  private selectSample(file: string) {
    this.setState({ modal: null });

    const xml = this.props.app.getSample(file);

    this.readBlocklyContents(xml);
  }


  private openThemes() {
    this.setState({ modal: 'themes' });
  }

  private selectTheme(theme: string) {
    this.closeModal();

    document.body.className = `theme-${theme}`;
  }


  private openExtensions() {
    this.setState({ modal: 'extensions' });
  }

  private selectExtension(extension: Extension) {
    this.closeModal();

    const { extensionsActive } = this.state;

    this.setState({
      extensionsActive: [...extensionsActive, extension],
    });
  }


  private onTerminalClose() {
    this.closeModal();
  }


  private hasCapability(capability: Capability) {
    if (!this.state.platform) return false;

    return this.state.platform.capabilities.indexOf(capability) !== -1;
  }

  private getExtensions() {
    if (!this.state.platform) return [];

    return this.state.platform.extentions;
  }


  private initTerminal(terminalView: RemoteShellView) {
    if (this.remoteShellView !== terminalView) {
      this.remoteShellView = terminalView;

      this.props.app.assignTerminal(terminalView);
    }
  }


  private getPythonCode() {
    return this.state.doc.python || '';
  }


  private openAdvancedFunctionDialog() {
    this.setState({ modal: 'functions' });
  }

  private openPlatforms() {
    this.setState({ modal: 'platform' });
  }

  private getAdvancedFunctionList(): SelectModalOption[] {
    return AdvancedFunctions.map((func) => ({
      label: func,
      obj: func,
    }));
  }

  private async runAdvancedFunction(func: AdvancedFunction) {
    if (func === 'Export') {
      await this.downloadPython();
    }

    this.closeModal();
  }


  public render() {
    const availablePlatforms = getPlatformList();

    return (
      <div id='page'>
        <ImageModal
          title='Select your mode'
          options={availablePlatforms}
          visible={this.state.modal === 'platform'}
          onSelect={(platform) => this.selectPlatform(platform)}
          onCancel={() => { }}
        />

        <Nav
          platformImg={this.state.platform && this.state.platform.image}
          sync={this.state.doc.pythonClean}
          openPlatforms={() => this.openPlatforms()}
          openTerminal={this.hasCapability('RemoteShell') || this.hasCapability('TrinketShell') ? () => this.openTerminal() : undefined}
          // downloadPython={() => this.downloadPython()}
          downloadHex={this.hasCapability('HexDownload') ? () => this.downloadHex() : undefined}
          openCode={() => this.openFile()}
          saveCode={() => this.saveFile()}
          newCode={() => this.new()}
          openSamples={() => this.openSamples()}
          openExtensions={this.getExtensions().length ? () => this.openExtensions() : undefined}
          openThemes={() => this.openThemes()}
          onFunction={() => this.openAdvancedFunctionDialog()}
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
          <RemoteShellView
            ref={(c) => this.initTerminal(c)}
            visible={this.state.modal === 'terminal'}
            onClose={() => this.onTerminalClose()}
          />
        }

        {this.hasCapability('TrinketShell') &&
          <TrinketView
            pythonCode={this.getPythonCode()}
            visible={this.state.modal === 'terminal'}
            onClose={() => this.onTerminalClose()}
          />
        }

        <SelectModal
          title='Samples'
          options={this.props.app.getSamples().map((label) => ({ label }))}
          selectLabel='Open'
          buttons={[]}
          visible={this.state.modal === 'samples'}
          onSelect={(file) => this.selectSample(file.label)}
          onButtonClick={(key) => key === 'close' && this.closeModal()}
        />

        <SelectModal
          title='Themes'
          options={this.props.app.getThemes().map((label) => ({ label }))}
          selectLabel='Select'
          buttons={[]}
          visible={this.state.modal === 'themes'}
          onSelect={(theme) => this.selectTheme(theme.label)}
          onButtonClick={(key) => key === 'close' && this.closeModal()}
        />

        <SelectModal
          title='Advanced Functions'
          selectLabel='Go'
          buttons={[]}
          visible={this.state.modal === 'functions'}
          options={this.getAdvancedFunctionList()}
          onSelect={(func) => this.runAdvancedFunction(func.label as AdvancedFunction)}
          onButtonClick={(key) => key === 'close' && this.closeModal()}
        />

        {this.getExtensions().length > 0 &&
          <SelectModal
            title='Extensions'
            options={this.getExtensions().map((label) => ({ label }))}
            selectLabel='Load'
            buttons={[]}
            visible={this.state.modal === 'extensions'}
            onSelect={(extension) => this.selectExtension(extension.label as Extension)}
            onButtonClick={(key) => key === 'close' && this.closeModal()}
          />
        }

      </div>
    );
  }
}
