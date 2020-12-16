import React from 'react';
import { ThemeProvider } from 'styled-components';
import './App.scss';
import Console from './components/Console/Console';
import PlayGround from './components/PlayGround/PlayGround';
import Container from './components/Container';
import { loadUser } from './actions/auth';
import { mouseup } from './actions/mouseup';
import { connect } from 'react-redux';
import MenuMain from './components/Menu/MenuMain/MenuMain';

export interface PropsApp {
    loadUser: () => void;
    mouseup: () => void;
    colors: {
      theme_one: string;
      theme_two: string;
    }
}

export interface StateApp {
    
}

class App extends React.Component<PropsApp, StateApp> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  UNSAFE__componentWillMount() {
    if (!localStorage.getItem('selectedLanguage')) {
      localStorage.setItem('selectedLanguage', 'EN');
    }

    if (!localStorage.getItem('colors')) {
      localStorage.setItem('colors', 'one');
    }
  }

  componentDidMount() {
    this.props.loadUser();
    this.props.mouseup();
  }

  render() {
    const theme = localStorage.getItem('colors');
    const { theme_one, theme_two } = this.props.colors;
    return (
      <ThemeProvider theme={theme === 'one' ? theme_one : theme === 'two' ? theme_two : theme_one}>
        <Container>
          <MenuMain />
          <Console />
          <PlayGround />
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: {colors: Object}) => ({
  colors: state.colors,
})

export default connect(mapStateToProps, { loadUser, mouseup })(App);
