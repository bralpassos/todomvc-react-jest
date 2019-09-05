import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Verificar se ao renderizar, renderiza uma lista vazia', () => {
  const component = renderer.create(<App />);
  expect(component).toMatchSnapshot();
});

it('Não deve adicionar se não apertar Enter', () => {
  const { getByPlaceholderText } = render(<App />);

  expect(getByPlaceholderText("What needs to be done?")).toBeTruthy();
});