import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { unmountComponentAtNode } from 'react-dom';

import App from '../App';

jest.mock('../services/apiService', () => {
  return {
    generationsFetcher: () => ({
      results: [
        {
          name: 'generation I',
          url: 'generation/1/'
        },
        {
          name: 'generation II',
          url: 'generation/2/'
        }
      ]
    }),
    generationFetcher: () => ({
      id: 1,
      name: 'generation I',
      main_region: 'jotho',
      pokemon_species: [{ name: 'pigeot', url: 'pokemon/pigeot' }]
    }),
    getPokemon: () => ({
      name: 'pigeot',
      stats: [],
      color: { name: 'white' },
      evolution: {}
    })
  };
});

describe('Test Initial Page', () => {
  let container: any = null;
  const history = createMemoryHistory();
  history.push('/');

  const originalError = console.error;
  beforeAll(() => {
    console.error = (...args: any) => {
      if (/Warning.*not wrapped in act/.test(args[0])) {
        return;
      }
      originalError.call(console, ...args);
    };
  });

  afterAll(() => {
    console.error = originalError;
  });

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('when initiated', () => {
    it('should render generation links', async () => {
      render(
        <Router history={history}>
          <App />
        </Router>,
        container
      );
      const generationLinks = await screen.findAllByText(/generation /);
      expect(generationLinks.length).toBe(2);
    });
  });

  describe('when clicked in a generation button link', () => {
    it('should appear generation layout', async () => {
      render(
        <Router history={history}>
          <App />
        </Router>,
        container
      );
      const leftClick = { button: 0 };
      userEvent.click(screen.getByText('generation I'), leftClick);
      expect(await screen.findByText(/Geração/)).toBeDefined();
    });
  });
});
