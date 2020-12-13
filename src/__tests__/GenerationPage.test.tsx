import React from 'react';
import { createMemoryHistory } from 'history';
import { unmountComponentAtNode } from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Router } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

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

describe('Test Generation Page', () => {
  let container: any = null;
  const history = createMemoryHistory();
  history.push('/generation/1');

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
    it('should appear pokemon listing', async () => {
      render(
        <Router history={history}>
          <App />
        </Router>,
        container
      );
      expect(await screen.findByText(/pigeot/)).toBeInTheDocument();
    });
  });

  describe('when searched a pokemon with an unmatched text', () => {
    it('should filter the pokemon listing with no results', async () => {
      render(
        <Router history={history}>
          <App />
        </Router>,
        container
      );
      const input: any = screen.getByLabelText('Pesquise por um pokemon');
      userEvent.type(input, 'pppp');
      expect(screen.queryByText(/pigeot/)).not.toBeInTheDocument();
    });
  });

  describe('when searched a pokemon with a matched text', () => {
    it('should filter the pokemon listing with 1 result', async () => {
      render(
        <Router history={history}>
          <App />
        </Router>,
        container
      );
      const input: any = screen.getByLabelText('Pesquise por um pokemon');
      userEvent.type(input, 'pige');
      expect(screen.queryByText(/pigeot/)).toBeInTheDocument();
    });
  });
});
