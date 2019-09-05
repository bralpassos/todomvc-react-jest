import React from 'react';
import renderer from 'react-test-renderer';
import TodoItem from './TodoItem.js';

test('Não deve renderizar nada quando passa uma lista vazia', () => {
    const items = [];
    const component = renderer.create(<TodoItem items={items} />);
    expect(component).toMatchSnapshot();
});

test('Deve renderizar uma lista quando passa um item', () => {
    const items = ['Item'];
    const component = renderer.create(<TodoItem items={items} />);
    expect(component).toMatchSnapshot();
});

test('Deve renderizar uma lista com 2 ítens quando forem passados 2 ítens', () => {
    const items = ['Item1','Item2'];
    const component = renderer.create(<TodoItem items={items} />);
    expect(component).toMatchSnapshot();
});